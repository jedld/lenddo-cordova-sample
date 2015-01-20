/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var config = {
          c_id: "F" + new Date().getTime(),
          ps_id: '53f44d25ebdade73154d7b5d',
          verificationFields: {
            /* sample verification field values */
            firstname: function() {
              return $('#first_name').val();
            },
            middlename: '',
            lastname: function() {
              return $('#last_name').val();
            },
            birthdate: '1985-03-03',
            email: function() {
              return $('#email').val();
            },
            employer: 'Google',
            mobilephone: '+639939299923'
          },
          onSubmit: function(cb) {
            var errors = false;
            if (errors === false) {
              cb();
            }
          },
          onSuccess: function(result) {
            console.log("submission complete");
            console.log(result);
            $('#form_container').html("<p>Success!</p>");
          },
          onFailure: function(result) {
            console.log("canceled?");
            console.log(result);
            $('#form_container').html("<p>Fail!</p>");
          }
        };

        LenddoVerify.initWidget(config);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};
