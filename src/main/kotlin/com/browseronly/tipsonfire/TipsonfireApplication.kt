package com.browseronly.tipsonfire

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.CrossOrigin

@SpringBootApplication
@CrossOrigin(origins = ["http://localhost:3000"])
class TipsonfireApplication

fun main(args: Array<String>) {
	runApplication<TipsonfireApplication>(*args)
}
