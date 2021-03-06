/*******************************************************************************
 * Copyright (c) 2013, 2016 Preparatic and others.
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
 *******************************************************************************/

package com.preparatic;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.Properties;

public class ConfigProperties {
	private static final Properties properties = new Properties();

	static {
		try {
			FileInputStream file = new FileInputStream("./config/config.properties");
			properties.load(new InputStreamReader(file , Charset.forName("UTF-8")));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static String getProperty(String key) {
		try {
			return properties.getProperty(key);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
}
