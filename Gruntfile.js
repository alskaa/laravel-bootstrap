module.exports = function(grunt) {

  /*
  |--------------------------------------------------------------------------
  | Project configuration
  |--------------------------------------------------------------------------
  |
  | 
  |
  */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    /*
    |--------------------------------------------------------------------------
    | Project Vars
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
    project: {
      // Src
      src: 'src',
      bower: '<%= project.src %>/bower_components',
      less: [
        '<%= project.src %>/less/main.less'
      ],
      js: [
        '<%= project.src %>/js/*.js'
      ],
      // Dist
      dist: 'dist',
      assets: '<%= project.dist %>/public/assets'
    },

    /*
    |--------------------------------------------------------------------------
    | Copy Task
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
    copy: {
      dev: {
        files: [
          {src:'<%= project.bower %>/jquery/jquery.min.js', dest:'<%= project.assets %>/js/jquery.min.js'},

          // Order boostrap *.js before concat or uglify
          // -------------------------------------------
          {src:'<%= project.bower %>/bootstrap/js/transition.js', dest:'<%= project.src %>/js/01-transition.js'},
          {src:'<%= project.bower %>/bootstrap/js/alert.js', dest:'<%= project.src %>/js/02-alert.js'},
          //{src:'<%= project.bower %>/bootstrap/js/button.js', dest:'<%= project.src %>/js/03-button.js'},
          //{src:'<%= project.bower %>/bootstrap/js/carousel.js', dest:'<%= project.src %>/js/04-carousel.js'},
          {src:'<%= project.bower %>/bootstrap/js/collapse.js', dest:'<%= project.src %>/js/05-collapse.js'},
          //{src:'<%= project.bower %>/bootstrap/js/dropdown.js', dest:'<%= project.src %>/js/06-dropdown.js'},
          //{src:'<%= project.bower %>/bootstrap/js/modal.js', dest:'<%= project.src %>/js/07-modal.js'},
          {src:'<%= project.bower %>/bootstrap/js/tooltip.js', dest:'<%= project.src %>/js/08-tooltip.js'},
          {src:'<%= project.bower %>/bootstrap/js/popover.js', dest:'<%= project.src %>/js/09-popover.js'},
          {src:'<%= project.bower %>/bootstrap/js/scrollspy.js', dest:'<%= project.src %>/js/10-scrollspy.js'},
          //{src:'<%= project.bower %>/bootstrap/js/tab.js', dest:'<%= project.src %>/js/11-tab.js'},
          //{src:'<%= project.bower %>/bootstrap/js/affix.js', dest:'<%= project.src %>/js/12-affix.js'},

          {src:'<%= project.bower %>/bootstrap-filestyle/src/bootstrap-filestyle.js', dest:'<%= project.src %>/js/98-bootstrap-filestyle.js'},
        ],
        filter: function(filepath) {
          var path = require('path');
          var dest = path.join(
            grunt.config('copy.js.dest'),
            // Remove the parent 'js/src' from filepath
            filepath.split(path.sep).slice(2).join(path.sep)
          );
          return !(grunt.file.exists(dest));
        },
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Less Task
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
    less: {
      dev: {
        options: {
          paths: ["src/bower_components/bootstrap/less/","src/bower_components/less-prefixer/","src/bower_components/csshat-lesshat/build/"]
        },
        files: {
          "<%= project.assets %>/css/style.min.css": "<%= project.less %>"
        }
      },
      prod: {
        options: {
          paths: ["src/bower_components/bootstrap/less/","src/bower_components/less-prefixer/","src/bower_components/csshat-lesshat/build/"],
          cleancss: true
        },
        files: {
          "<%= project.assets %>/css/style.min.css": "<%= project.less %>"
        }
      }
    },

    /*
    |--------------------------------------------------------------------------
    | Concat Task
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
    concat: {
      dev: {
        files: {
          '<%= project.assets %>/js/html5shiv.min.js': '<%= project.bower %>/html5shiv/dist/html5shiv.js',
          '<%= project.assets %>/js/main.min.js': '<%= project.js %>'
        }
      }
    },

    /*
    |--------------------------------------------------------------------------
    | Uglify Task
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
    uglify: {
      prod: {
        files: {
          '<%= project.assets %>/js/html5shiv.min.js': '<%= project.bower %>/html5shiv/dist/html5shiv.js',
          '<%= project.assets %>/js/main.min.js': '<%= project.js %>'
        }
      }
    },

    /*
    |--------------------------------------------------------------------------
    | bgShell Task
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
    bgShell: {
      launchServer: {
        cmd: 'php dist/artisan serve',
        bg: true
      }
    },

    /*
    |--------------------------------------------------------------------------
    | Watch task
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
    watch: {
      less: {
        files: '<%= project.src %>/less/**/*',
        tasks: ['less:dev']
      },
      uglify: {
        files: '<%= project.src %>/js/**/*',
        tasks: ['uglify:dev']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= project.assets %>/**/*.css',
          '<%= project.assets %>/**/*.js',
          '<%= project.dist %>/app/views/**/*.php'
        ]
      }
    }

  });

  /*
  |--------------------------------------------------------------------------
  | Load Grunt tasks
  |--------------------------------------------------------------------------
  |
  | 
  |
  */
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');


  /*
  |--------------------------------------------------------------------------
  | Register tasks
  |--------------------------------------------------------------------------
  |
  | 
  |
  */
  grunt.registerTask('default', ['copy:dev','less:dev','concat:dev','bgShell:launchServer','watch']);
  grunt.registerTask('prod', ['copy:dev','less:prod','uglify:prod']);

};