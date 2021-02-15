/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.dto

import com.arangodb.springframework.core.ArangoOperations
import org.springframework.beans.factory.annotation.Autowired

    @Autowired
    var template: ArangoOperations? = null

    var exists = template!!.exists("1289", Users::class.java)
