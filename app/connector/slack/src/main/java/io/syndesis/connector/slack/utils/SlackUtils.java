/*
 * Copyright (C) 2016 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.syndesis.connector.slack.utils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;

import org.apache.http.HttpResponse;

public final class SlackUtils {

    private SlackUtils() {
    }

    @SuppressWarnings("PMD.AssignmentInOperand")
    public static String readResponse(HttpResponse response) throws IOException {
        ByteArrayOutputStream result = new ByteArrayOutputStream();
        try (InputStream s = response.getEntity().getContent()) {
        byte[] buffer = new byte[1024];
        int length;
            while ((length = s.read(buffer)) != -1) {
                result.write(buffer, 0, length);
            }
        }
        return result.toString(StandardCharsets.UTF_8.name());
    }

    @SuppressWarnings("PMD.AssignmentInOperand")
    public static String readResponse(InputStream s) throws IOException, UnsupportedEncodingException {
        ByteArrayOutputStream result = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int length;
        while ((length = s.read(buffer)) != -1) {
            result.write(buffer, 0, length);
        }
        return result.toString(StandardCharsets.UTF_8.name());
    }
}
