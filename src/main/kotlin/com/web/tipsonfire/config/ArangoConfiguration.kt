/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.config

import com.arangodb.ArangoDB
import com.arangodb.springframework.annotation.EnableArangoRepositories
import com.arangodb.springframework.config.ArangoConfiguration
import org.springframework.context.annotation.Configuration


@Configuration
@EnableArangoRepositories(basePackages = ["com.web.tipsonfire.dto","com.web.tipsonfire.repository"])
class MyConfiguration : ArangoConfiguration {
    override fun arango(): ArangoDB.Builder {
        return ArangoDB.Builder()
    }

    override fun database(): String {
        // Name of the database to be used
        return "FINGERSONFIRE_ADMIN"
    }
}