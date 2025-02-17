/**
 * Copyright 2020 Google Inc. All rights reserved.
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

import type {LogLevel} from '../log-level';
import type {BrowserConnectOptions} from './BrowserConnector';
import type {Product} from './Product';

export interface BrowserLaunchArgumentOptions {
	headless?: boolean | 'chrome';
	userDataDir?: string;
	devtools?: boolean;
	debuggingPort?: number;
	args: string[];
}

export interface LaunchOptions {
	executablePath?: string;
	timeout?: number;
	dumpio?: boolean;
	logLevel: LogLevel;
	env?: Record<string, string | undefined>;
	product?: Product;
	indent: boolean;
}

export type PuppeteerNodeLaunchOptions = BrowserLaunchArgumentOptions &
	LaunchOptions &
	BrowserConnectOptions;
