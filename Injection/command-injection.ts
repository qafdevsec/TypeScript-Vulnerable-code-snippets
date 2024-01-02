/*
Type Of Vulnerability : Command Injection
CWE : CWE-78
*/

import { execSync } from 'child_process';
import { Request } from 'express';

const cmd = req.query.cmd; //Source
execSync(cmd); // Sink
