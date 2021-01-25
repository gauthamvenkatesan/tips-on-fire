package com.browseronly.tipsonfire.consumer;

import com.browseronly.tipsonfire.util.getJsonDataFromAsset
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
