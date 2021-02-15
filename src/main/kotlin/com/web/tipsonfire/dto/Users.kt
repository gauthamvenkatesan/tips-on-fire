/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.dto

import com.arangodb.springframework.annotation.Document
import org.springframework.data.annotation.Id
import java.time.LocalDateTime
import javax.annotation.Generated

@Document
data class  Users(@Id @Generated var id: Long?, var name: String, var age: String, var password: String, var createTimeStamp: LocalDateTime)
