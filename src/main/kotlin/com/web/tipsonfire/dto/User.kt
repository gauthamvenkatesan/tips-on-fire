/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.dto

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.time.LocalDateTime

@Entity
data class  User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) var id: Long?, var name: String, var age: Int, var password: String, var createTimeStamp: LocalDateTime)
