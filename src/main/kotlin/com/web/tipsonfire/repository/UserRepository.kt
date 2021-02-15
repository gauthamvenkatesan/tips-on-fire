/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.repository

import com.arangodb.model.AqlQueryOptions
import com.arangodb.springframework.repository.ArangoRepository
import com.web.tipsonfire.dto.Users


interface UserRepository : ArangoRepository<Users, Long>{
    fun findByName(name: String?, options: AqlQueryOptions?): Iterable<Users?>?
}