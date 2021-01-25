/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.browseronly.tipsonfire;

import org.junit.jupiter.api.Test;
import org.springframework.test.util.AssertionErrors;

import java.util.Arrays;
import java.util.Map;

public class TryOutTest extends TryOut {

    @Test
    public void testMinimumMoves(){
            int result = super.minimumMoves(Arrays.asList(123,543), Arrays.asList(321,279));
            AssertionErrors.assertEquals("check result of minimum moves with proper value",16,result);
    }

    @Test
        public void testcompareACBD(){
       boolean result = super.compareACBD("aaabbbcccdddabcd");
        AssertionErrors.assertEquals("check the count of a is equal to c and b is equal to d",true,result);
    }
}
