// =========================================================================
// Copyright © 2017 T-Mobile USA, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// =========================================================================

const utils = require("../utils.js");

module.exports = (onComplete) => {
  // initialize dynamodb
  let dynamodb = utils.initDynamodb();
  let scanparams = {
    TableName: global.config.TABLE_NAME,
    "ReturnConsumedCapacity": "TOTAL"
  };


  dynamodb.scan(scanparams, (err, data) => {
    if (err) {
      onComplete(err);
    } else {
      let config_data = utils.formatData(data.Items[0]);
      onComplete(null, config_data);
    }
  });
};
