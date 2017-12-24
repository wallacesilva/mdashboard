<?php 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MDashboard</title>
    <!-- <link rel="stylesheet" href="assets/css/widgets.css"> -->
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <div class="dash-container">

        <div class="widgets widget-clock-analog">
            <div class="title">Clock</div>
            <div class="content text-center">
                <div class="clock-container">
                    <div class="clock">
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div class="marks"></div>
                        <div id="hoursHand" class="hours-hand">
                            <div></div>
                        </div>
                        <div id="minutesHand" class="minutes-hand">
                            <div></div>
                        </div>
                        <div id="secondsHand" class="seconds-hand">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="widgets widget-clock-digital-2">
            <div class="title">Clock Digital 2</div>
            <div class="content text-center">
                <div id="clock" class="dark">
                    <div class="display">
                        <div class="weekdays"></div>
                        <div class="ampm"></div>
                        <div class="alarm"></div>
                        <div class="digits"></div>
                    </div>
                </div>

                <div class="button-holder">
                    <a class="button">Switch Theme</a>
                </div>
                <link rel="stylesheet" href="assets/css/clock-digital-2.css">
                <script src="assets/js/moment_2.0.0.min.js"></script>
            </div>
        </div>

        <div class="widgets widget-clock-digital">
            <div class="title">Clock Digital</div>
            <div class="content text-center">
                <h1 class="clock-digital-text"></h1>
            </div>
        </div>
        
        <div class="widgets widget-feeds">
            <div class="title">Feeds</div>
            <div class="content">
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur elit ...</li>
                    <li>Lorem ipsum amet, consectetur adipisicing elit ...</li>
                    <li>Lorem dolor sit amet, consectetur adipisicing elit ...</li>
                    <li>Ipsum lorem dolor sit amet, adipisicing elit ...</li>
                    <li>Lorem ipsum dolor sit, consectetur adipisicing elit ...</li>
                </ul>
            </div>
        </div>

        <div class="widgets widget-weather">
            <div class="title">Weather</div>
            <div class="content text-center">
                <div class="weather-location"></div>
                <h1><span class="weather-degree">27</span> <small class="weather-temp">C</small></h1>
            </div>
        </div>
        
        <div class="widgets widget-cpu-usage">
            <div class="title">CPU Usage</div>
            <div class="content text-center">
                <h1>23%</h1>
            </div>
        </div>

        <div class="widgets widget-memory-usage">
            <div class="title">Mem Usage</div>
            <div class="content text-center">
                <h1>50%</h1>
            </div>
        </div>

        <div class="widgets"><div class="title">Title</div><div class="content">Content</div></div>
        <div class="widgets"><div class="title">Title</div><div class="content">Content</div></div>
        <!-- <div class="widgets"><div class="title"></div><div class="content"></div></div>
        <div class="widgets"><div class="title"></div><div class="content"></div></div>
        <div class="widgets"><div class="title"></div><div class="content"></div></div>
        <div class="widgets"><div class="title"></div><div class="content"></div></div>
        <div class="widgets"><div class="title"></div><div class="content"></div></div>
        <div class="widgets"><div class="title"></div><div class="content"></div></div>
        <div class="widgets"><div class="title"></div><div class="content"></div></div> -->
        
    </div>

    <script src="assets/js/clock-digital-2.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>