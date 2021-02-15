/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.consumer

import com.web.tipsonfire.model.Health
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

import java.util.concurrent.atomic.AtomicLong
@RestController

class HealthController {

    val counter = AtomicLong();

    @GetMapping("/healthCheck")
    fun health(@RequestParam(value = "myHealth", defaultValue = "running") myHealth: String) =
            Health(counter.incrementAndGet(), "I am $myHealth")
}