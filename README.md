# Angular Http Get() Post() Service

If U r using newer version of angular then the angular new version does not support .map you have to install this through cmd

npm install --save rxjs-compat
via this you can enjoy with old technique .

## note:
don't forget to import these lines.

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
