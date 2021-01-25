package com.browseronly.tipsonfire.consumer

import com.browseronly.tipsonfire.model.Health
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