<?php

class String {


        public static function titleToUrl($title) { 
                $url = str_replace(' ', '-', $title); // Replaces all spaces with hyphens.
                $url = preg_replace('/[^A-Za-z0-9\-]/', '', $url); // Removes special chars.
                $url = preg_replace('/-+/', '-', $url);

                return strtolower($url); // Replaces multiple hyphens with single one.
        }


}
