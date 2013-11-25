module.exports = function(grunt) {

  /*
  | _________________________________________________
  |
  |   Project configuration
  | _________________________________________________
  |
  */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    /*
    | _________________________________________________
    |
    |   Project variables
    | _________________________________________________
    |
    */
    project: {

      /* Src
      -------------- */
      src: 'src',
      src_bower: '<%= project.src %>/bower_components',
      src_components: '<%= project.src %>/components',
      src_scss: '<%= project.src %>/scss',
      src_js: '<%= project.src %>/js',

      /* Dist
      -------------- */
      dist: 'dist',
      dist_assets: '<%= project.dist %>/www/assets',
      dist_views: '<%= project.dist %>/app/views',
      dist_css: '<%= project.dist_assets %>/css',
      dist_js: '<%= project.dist_assets %>/js',

    },

    /*
    | _________________________________________________
    |
    |   Copy task
    | _________________________________________________
    |
    */
    copy: {
      dev: {
        files: [
          {src:'<%= project.src_bower %>/jquery/jquery.min.js', dest:'<%= project.dist_js %>/jquery.min.js'},
          {src:'<%= project.src_components %>/**/*.blade.php', dest:'<%= project.dist_views %>/layouts/components/'}
        ],
      },
    },

    /*
    | _________________________________________________
    |
    |   Sass task
    | _________________________________________________
    |
    */
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= project.dist_css %>/page.min.css': '<%= project.src_scss %>/page.scss'
        }
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= project.dist_css %>/page.min.css': '<%= project.src_scss %>/page.scss'
        }
      },
    },

    /*
    | _________________________________________________
    |
    |   Concat task
    | _________________________________________________
    |
    */
    concat: {
      dev: {
        files: {

          /* Create page.js
          ----------------- */
          '<%= project.dist_js %>/page.min.js': [
            '<%= project.src_components/component/component.js %>',
            '<%= project.src_js/page.js %>',
          ],
        }
      }
    },

    /*
    | _________________________________________________
    |
    |   Uglify task
    | _________________________________________________
    |
    */
    uglify: {
      prod: {
        files: {

          /* Create page.js
          ----------------- */
          '<%= project.dist_js %>/page.min.js': [
            '<%= project.src_components/component/component.js %>',
            '<%= project.src_js/page.js %>',
          ],
        }
      }
    },

    /*
    | _________________________________________________
    |
    |   BgShell task
    | _________________________________________________
    |
    */
    bgShell: {
      launchServer: {
        cmd: 'php dist/artisan serve',
        bg: true
      }
    },

    /*
    | _________________________________________________
    |
    |   Watch task
    | _________________________________________________
    |
    */
    watch: {
      sass: {
        files: '<%= project.src %>/**/*.scss',
        tasks: ['sass:dev']
      },
      uglify: {
        files: '<%= project.src %>/**/*.js',
        tasks: ['uglify:dev']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= project.dist_assets %>/**/*.css',
          '<%= project.dist_assets %>/**/*.js',
          '<%= project.dist %>/app/views/**/*.php'
        ]
      }
    }

  });

  /*
  | _________________________________________________
  |
  |   Load Grunt task
  | _________________________________________________
  |
  */
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');


  /*
  | _________________________________________________
  |
  |   Register task
  | _________________________________________________
  |
  */
  grunt.registerTask('default', ['copy:dev','sass:dev','concat:dev','bgShell:launchServer','watch']);
  grunt.registerTask('prod', ['copy:dev','sass:prod','uglify:prod']);

};
