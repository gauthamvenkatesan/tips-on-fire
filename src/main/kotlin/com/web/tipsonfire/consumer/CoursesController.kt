/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.consumer;

import com.web.tipsonfire.util.getJsonDataFromAsset
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoursesController {

    @GetMapping("/courses",produces = ["application/json"])
    @CrossOrigin(origins = ["http://localhost:3000"])
    fun getAllCourses(): String? {
       return getJsonDataFromAsset("courses.json")
    }
}
