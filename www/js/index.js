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
var $timer = $('.counter'),
    count = 0;
var inter = 0;
function counter(){
    $timer.html("Time: " + count++);
}
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
        document.addEventListener("online", this.onOnline, false);
        document.addEventListener("offline", this.onOffline, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
     
        app.receivedEvent('deviceready');

    },
   
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var interval;
        $('.getData').click(function(){
            inter = setInterval(function counter(){
                $timer.html("Time: " + count++);
            }, 1000);
            //$.get("http://avuka-resttst.102.gov.il/AvukaRest_TEST/api/Main/GetCities/?search=6200", function( data ) {
             $.get( "https://jsonplaceholder.typicode.com/todos", function( data ) {
                count = 0;
                for(i=0; i<10000; i++)
                {
                    window.clearInterval(i);
                }
                $.each(_.take(data, 10), function( index, value ){
                    $('.result').append('<p>' + value.title + '</p>')
                });
              }).fail(function(){
                count = 0;
                for(i=0; i<10000; i++)
                {
                    window.clearInterval(i);
                }
              });
        });
        Offline.on('confirmed-down', function() {
            $( ".result" ).text("");
            $('.getData').attr('disabled', 'disabled');
            $('.con').css('display','none');
            $('.noCon').css('display','block');
        });
        Offline.on('confirmed-up', function() {
            $.get( "https://jsonplaceholder.typicode.com/todos", function( data ) {
                $.each(data, function( index, value ){
                    $('.td1').append('<p>' + value.title + '</p>')
                });
              });
            $('.getData').removeAttr('disabled');
            $('.con').css('display','block');
            $('.noCon').css('display','none');
        });
        Offline.on('up', function() {
            $('.getData').removeAttr('disabled');
            $('.con').css('display','block');
            $('.noCon').css('display','none');
        });
        Offline.on('down', function() {
            $('.getData').attr('disabled', 'disabled');
            $('.con').css('display','none');
            $('.noCon').css('display','block');
        });        
        // Offline.on('checking', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
        // Offline.on('reconnect:started', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
        // Offline.on('reconnect:stopped', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
        // Offline.on('reconnect:tick', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
        // Offline.on('reconnect:connecting', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
        // Offline.on('requests:flush', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
        // Offline.on('reconnect:failure', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
        // Offline.on('requests:hold', function() {
        //     $('.offStat').text("Offline stat: " + Offline.state);
        // });
    },
    onOnline: function() {
        // $('.offStat').text("Online stat: " );
        // $('.con').css('display','block');
        // $('.noCon').css('display','none');
            //   $.get( "https://jsonplaceholder.typicode.com/todos", function( data ) {
            //     $( ".result" ).text("Returns:" + data[0].title );
            //   });
    },
    onOffline: function() {
        
        // $('.getData').css('disable','disable');
        // $('.con').css('display','none');
        // $('.noCon').css('display','block');
        // // $('.offStat').text("Offline stat: ");
        // $( ".result" ).text("No Internet Connection");
    }
};
