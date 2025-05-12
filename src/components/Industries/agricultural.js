import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import i1 from '../../assets/img/i1.png';
import i2 from '../../assets/img/i2.png';
import i4 from '../../assets/img/i4.png';
import i5 from '../../assets/img/i5.png';
import group from '../../assets/logo/group.webp';
import mobile from '../../assets/img/mobile1.webp';
import laptop from '../../assets/img/laptop1.webp';

function Agricultural() {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = {
        forms: [
            { img: i1, head: "Lets You Work More Effectively", p: "cieTrade helps agriculture traders manage their critical business data and operations from one place that can be instantly and securely accessed from anywhere." },
            { img: i2, head: "Organizes Your Agriculture Operation", p: "Our unique worksheet concept provides complete control, traceability and oversight of your product lifecycles from origin through manufacturing and shipping." },
            { img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2NTZweCIgaGVpZ2h0PSIxNjQ0cHgiIHZpZXdCb3g9Ii0yOC4yNSAtMjcgMTY1NiAxNjQ0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZGVmcz48L2RlZnM+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xMTIuOTg2LDBjMzEuMzMsMCw2Mi42NTksMCw5My45ODgsMCBjMjUuMzUxLDExLjE0Myw0Ni4xNDgsMzAuODU2LDUwLjk5NCw2Mi45OTJjNC4yMTcsMjcuOTY3LDEsNjIuNzA2LDEsOTYuOTg4YzAsNDcuMjc4LDUuOTY5LDk5Ljc4NS05Ljk5OSwxMjUuOTg0IGMtMjAuODg5LDM0LjI3My02OC4yNTUsNDMuODExLTEyMy45ODQsMzUuOTk2Yy0zMC44NDUtNC4zMjYtNjAuNjQ1LTI5Ljc5NS02My45OTItNjkuOTkyYy0yLjI5NC0yNy41NSwwLTYyLjM2OSwwLTk1Ljk4OCBjMC0zMy42NzMtMi43NjgtNjguMTIyLDEtOTQuOTg4QzY2LjAxNCwzMi4zMTYsODYuNTQyLDEwLjEwMSwxMTIuOTg2LDB6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0zNDYuOTU3LDBjMjEuMzMxLDAsNDIuNjYyLDAsNjMuOTkyLDAgYy0xMS4zNzYsODYuMjc4LTIyLjQyNiwxNzIuODgzLTMzLjk5NSwyNTguOTY4YzI1My4yLDQwLjE2MSw1OTEuMDgsMzguMzQ4LDg0NS44OTUsMUMxMjExLjUxLDE3My4zMTgsMTIwMC4xODksODYuNjQ5LDExODguODUyLDAgYzIxLjMzLDAsNDIuNjYxLDAsNjMuOTkyLDBjMTguNzIzLDEzOC4yNTQsMzcuNDQ3LDI3Ni41MTUsNTQuOTkyLDQxNS45NDhjOTUuODM2LTMuNDEzLDE0OS42MzUsMzIuNjIzLDE3Ny45NzksOTIuOTg4IGMxMS42ODksMjQuODk2LDE3Ljk5OCw1MC4wMDMsMTcuOTk4LDg0Ljk4OWMwLDYzLjcyMywwLjgzOSwxMzUuNzc0LTEsMjA1Ljk3NWMtNDY4LjkyMSwwLTkzNy44OSwwLTE0MDYuODI0LDAgYzMuMzY3LTgwLjYzMy00Ljk2Ni0xNTkuOTg3LDEtMjI5Ljk3MmM1LjY4OS02Ni43NDgsNDMuNjE3LTExNC43MjksOTIuOTg5LTEzNy45ODJjMjcuMzEzLTEyLjg2NCw1OC45NjctMTcuNDI5LDEwMS45ODctMTUuOTk4IEMzMDkuNDcyLDI3Ni40NzksMzI4LjgxNCwxMzguODM1LDM0Ni45NTcsMHogTTU3NS45MjgsNTc0LjkyOGMwLDMwLjExNi01LjU1NSw3My44MjUsMyw5Ni45ODggYzE0Ljg2Niw0MC4yNTEsNjYuMzUzLDMxLjk5NiwxMjIuOTg0LDMxLjk5NmM2Ny4yOCwwLDEyNi43MzQsMCwxOTQuOTc2LDBjMjkuNTQ4LDAsNzMuMjQ3LDUuMDMsOTQuOTg4LTMgYzQwLjc0OC0xNS4wNDksMzEuOTk2LTY2LjczMywzMS45OTYtMTIyLjk4NGMwLTMzLjYyNyw1LjcyNi03My4zNjQtMi45OTktOTYuOTg4Yy01LjQ0NS0xNC43NDMtMTguODIyLTI0Ljk3OS0yOC45OTctMjguOTk3IGMtMjIuNzM1LTguOTc4LTY0Ljk1Mi0zLjk5OS04OC45ODktMy45OTljLTYyLjE2NCwwLTEyOC4wOTYsMC0xODcuOTc2LDBjLTI5LjQ2MiwwLTY2LjgzMy0yLjg4OC05NC45ODgsMSBDNTY3LjE4NSw0NTYuMjI2LDU3NS45MjgsNTEyLjIwMiw1NzUuOTI4LDU3NC45Mjh6IE0yNTUuOTY4LDY0NC45MTljMCwxNy43MDctMi43Nyw0NC4yMjQsNiw1Mi45OTNjNy43NTYsNy43NTYsMjMuNjQsNiw0MS45OTUsNiBjMTQuODM3LDAsMzIuMjcsMCw0OC45OTQsMGMyMy4wNzIsMCw3OS4zMDgsNS4zNzYsODkuOTg4LTYuOTk5YzguMTA4LTkuMzk2LDUtMzUuMjQxLDUtNTcuOTkzYzAtMTguMTE2LDIuNzI5LTQ4LjI2NS02LTU2Ljk5MyBjLTEyLjM2Ni0xMi4zNjYtNjAuMjk0LTYtODAuOTktNmMtMjguOTYzLDAtNjMuMjY4LTQuNjE3LTg3Ljk4OSwxQzI0OS42MDksNTgyLjIzNSwyNTUuOTY4LDYxMS44NjYsMjU1Ljk2OCw2NDQuOTE5eiAgTTExNTEuODU1LDY0NC45MTljMCwxNy43MDctMi43Nyw0NC4yMjQsNiw1Mi45OTNjNy43NTYsNy43NTYsMjMuNjQxLDYsNDEuOTk0LDZjMTQuODM3LDAsMzIuMjcsMCw0OC45OTQsMCBjMjMuMDcyLDAsNzkuMzA5LDUuMzc2LDg5Ljk4OC02Ljk5OWM4LjEwOS05LjM5Niw1LTM1LjI0MSw1LTU3Ljk5M2MwLTE4LjExNiwyLjcyOS00OC4yNjUtNi01Ni45OTMgYy0xMi4zNjUtMTIuMzY2LTYwLjI5NC02LTgwLjk4OS02Yy0yOC45NjMsMC02My4yNjgtNC42MTctODcuOTg5LDFDMTE0NS40OTcsNTgyLjIzNSwxMTUxLjg1NSw2MTEuODY2LDExNTEuODU1LDY0NC45MTl6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xNDA5LjgyNCwyYzE5LjUzMS0yLjE5Miw1Ny45My0zLjQ1OSw3NC45OSwxIGMyNC44NDgsNi40OTUsNDUuODUyLDI4LjAyOCw1MS45OTMsNTEuOTk0YzYuNjU1LDI1Ljk2OCwyLjAwMSw3NS44MDcsMiwxMDYuOTg3Yy0wLjAwMSwzNS44NTEsNC42MTYsOTMuNzc2LTUuOTk5LDExNi45ODUgYy05LjA1OCwxOS44MDItMjguODQ4LDM2LjUxMi00OS45OTQsNDEuOTk1Yy0yMC4yNjYsNS4yNTQtNjAuNzk2LDUuMDMxLTgxLjk5LDBjLTI1LjA1Ni01Ljk0OC00NC4xODQtMjQuNjQ5LTUxLjk5Mi00Ny45OTQgYy04LjU5OC0yNS42OTgtNC03NC43NS00LTEwNy45ODZjMC0zOC4yODUtNS41MzEtODEuMTc2LDItMTA5Ljk4NkMxMzU0LjA3MiwyNy4yOSwxMzc4LjYxLDUuNTA0LDE0MDkuODI0LDJ6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik05Ni45ODgsODYzLjg5MmM0NjguOTM1LDAsOTM3LjkwNCwwLDE0MDYuODI1LDAgYzAsNTMuMzI3LDAsMTA2LjY1MywwLDE1OS45OGMtNDY5LjI4OSwwLTkzOC41MjcsMC0xNDA3LjgyNCwwYzAtNTIuMzI3LDAtMTA0LjY1NCwwLTE1Ni45OCBDOTUuOTAyLDg2NS40NzMsOTUuODIzLDg2NC4wNjEsOTYuOTg4LDg2My44OTJ6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xNTk5LjgsMTE1MS44NTVjMCwyMS4zMzEsMCw0Mi42NjIsMCw2My45OTIgYy01MzMuMjg5LDAtMTA2Ni40NzksMC0xNTk5LjgsMGMwLTIxLjMzLDAtNDIuNjYxLDAtNjMuOTkyYzM5Ljk5NSwwLDc5Ljk5LDAsMTE5Ljk4NSwwYy0xMC41MzEtMTQuODAxLTI0LjQ4Ni0zNC44MzgtMjMuOTk3LTYzLjk5MSBjMTA2LjMxOCwwLjY2NiwyMTUuMzA4LTEuMzMzLDMxOS45NiwwLjk5OWMwLjAzOSwyMS40NzctNy44NDIsMzguNjI1LTE1Ljk5OCw1MC45OTRjLTMuMTQ4LDQuNzczLTguMjg5LDkuNDk4LTYuOTk5LDExLjk5OCBjMjcxLjY0NSwwLDU0My4yNTcsMCw4MTQuODk4LDBjLTEwLjUzMS0xNC44MDEtMjQuNDg2LTM0LjgzOC0yMy45OTgtNjMuOTkxYzEwNi4zMTgsMC42NjYsMjE1LjMwOS0xLjMzMywzMTkuOTYxLDAuOTk5IGMwLjAzOSwyMS40NzctNy44NDIsMzguNjI1LTE1Ljk5OCw1MC45OTRjLTMuMTQ4LDQuNzczLTguMjg5LDkuNDk4LTcsMTEuOTk4QzE1MjAuNDc3LDExNTEuODU1LDE1NjAuMTM5LDExNTEuODU1LDE1OTkuOCwxMTUxLjg1NXogIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0yMjQuOTcyLDEyNDcuODQ0YzIwLjk5OCwwLDQxLjk5NSwwLDYyLjk5MiwwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTctMjUuMDE3LDQwLjk5NS0zOS45OTVjMTMuMDE2LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk0LTM4Ljk5NSBjMjguMTg1LTkuMTY2LDQ5Ljg4OCwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNDksMTMuMzc0LTI2LjYzMSwzMC43MzYtMzcuOTk1LDQxLjk5NSBjLTQwLjg0MSw0MC40NjEtODAuODA1LDc5LjYzNC0xMTkuOTg1LDExOS45ODVjLTQxLjc4My0zOC4yNDQtNzkuOS03OS4yMzYtMTIxLjk4NC0xMjAuOTg1IGMtMTEuNjA4LTExLjUxNi0zNC43NTEtMjcuNTYzLTM4Ljk5NS00MS45OTVjLTcuNDA2LTI1LjE4LDE0Ljg1My00OS43Nyw0MS45OTQtNDAuOTk0YzE3LjE5Nyw1LjU2LDMwLjA2NSwyNS4wNjQsNDMuOTk1LDM4Ljk5NSBjMTQuNDkyLDE0LjQ5MiwyOS4yMTEsMjguNTY2LDQxLjk5NCw0MC45OTVDMjI0LjYzOSwxMzg3LjQ5MiwyMjIuNjM5LDEzMTUuNTA0LDIyNC45NzIsMTI0Ny44NDR6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik03NjguOTA0LDEyNDcuODQ0YzIwLjk5OCwwLDQxLjk5NSwwLDYyLjk5MywwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTYtMjUuMDE3LDQwLjk5NC0zOS45OTVjMTMuMDE2LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk0LTM4Ljk5NSBjMjguMTg2LTkuMTY2LDQ5Ljg4OSwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNDksMTMuMzc0LTI2LjYzLDMwLjczNi0zNy45OTUsNDEuOTk1Yy00MC44NDEsNDAuNDYxLTgwLjgwNSw3OS42MzQtMTE5Ljk4NCwxMTkuOTg1IGMtNDEuNzg0LTM4LjI0NC03OS45MDEtNzkuMjM2LTEyMS45ODUtMTIwLjk4NWMtMTEuNjA4LTExLjUxNi0zNC43NS0yNy41NjMtMzguOTk1LTQxLjk5NWMtNy40MDYtMjUuMTgsMTQuODUzLTQ5Ljc3LDQxLjk5NS00MC45OTQgYzE3LjE5Nyw1LjU2LDMwLjA2NSwyNS4wNjUsNDMuOTk1LDM4Ljk5NWMxNC40OTMsMTQuNDkyLDI5LjIxMSwyOC41NjYsNDEuOTk1LDQwLjk5NSBDNzY4LjU3LDEzODcuNDkyLDc2Ni41NzEsMTMxNS41MDQsNzY4LjkwNCwxMjQ3Ljg0NHoiPjwvcGF0aD48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0Q3MUYzMCIgZD0iTTEzMTIuODM2LDEyNDcuODQ0YzIwLjk5NywwLDQxLjk5NCwwLDYyLjk5MiwwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTYtMjUuMDE3LDQwLjk5NC0zOS45OTVjMTMuMDE3LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk1LTM4Ljk5NSBjMjguMTg1LTkuMTY2LDQ5Ljg4OCwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNSwxMy4zNzQtMjYuNjMxLDMwLjczNi0zNy45OTYsNDEuOTk1Yy00MC44NCw0MC40NjItODAuODA1LDc5LjYzNC0xMTkuOTg0LDExOS45ODUgYy00MS43ODMtMzguMjQ0LTc5LjktNzkuMjM2LTEyMS45ODQtMTIwLjk4NWMtMTEuNjA5LTExLjUxNi0zNC43NTItMjcuNTYzLTM4Ljk5Ni00MS45OTVjLTcuNDA1LTI1LjE4LDE0Ljg1NC00OS43Nyw0MS45OTUtNDAuOTk0IGMxNy4xOTcsNS41NiwzMC4wNjUsMjUuMDY1LDQzLjk5NSwzOC45OTVjMTQuNDkyLDE0LjQ5MiwyOS4yMTEsMjguNTY2LDQxLjk5NCw0MC45OTUgQzEzMTIuNTAyLDEzODcuNDkyLDEzMTAuNTAzLDEzMTUuNTA0LDEzMTIuODM2LDEyNDcuODQ0eiI+PC9wYXRoPjwvc3ZnPg==", head: "Integrates With Your Scales", p: "cieTrade offers seamless scale integration with truck, floor, and forklift scales with optional stored tare weights to save time and improve accuracy." },
            { img: i4, head: "Helps Avoid Oversights", p: "cieTrade’s built-in workflow tools for agriculture trading, notifications and alerts help you track critical tasks so that nothing gets overlooked by your back office." },
            { img: i5, head: "Provides Critical Business Insights", p: "cieTrade provides valuable business intelligence with real-time gross profit reports by customer, supplier, product, tonnage trend and more, helping you make better decisions." },
            { img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0MHB4IiBoZWlnaHQ9IjI0MHB4IiB2aWV3Qm94PSIxOTAuNTIyIDE5NC40NjggMjQwIDI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI0Q2MEYzMCIgZD0iTTE5MC44NDIsMzYzLjM0OWMwLjY2OC0yLjcyOCwxLjM2NC01LjQzOSwxLjk5MS04LjE2N2MyLjYzMy0xMS4yNzgsNy45MjUtMjEuMTU1LDE2LjAzNy0yOS4zNzIgYzE0Ljg0OC0xNS4wMjIsMjkuNjgxLTMwLjA3LDQ0LjgyMy00NC43OTdjMjcuMDIyLTI2LjI3Myw3MS41NjQtMjMuMTA2LDk0LjQ5Nyw2LjQwMWMyLjIwNSwyLjgzMywyLjY3Myw0LjYzNy0wLjI5NCw3LjM5MSBjLTYuMzM2LDUuODY3LTEyLjI2OCwxMi4xNzQtMTguNjU2LDE4LjU5Yy0xLjAyOS0xLjY0NS0xLjg0NC0yLjk4MS0yLjY5OS00LjMwNGMtMTEuNjk0LTE4LjAxNS0zNi41MzgtMjEuMTAyLTUxLjkyLTYuMTM0IGMtMTQuNzgsMTQuMzgxLTI5LjM2MSwyOC45ODctNDMuNzUzLDQzLjc1NGMtMTIuOTksMTMuMzM4LTEyLjYyOSwzNC4xODYsMC40MjcsNDcuMTc0YzEzLjA0MywxMi45NzgsMzMuNzMxLDEzLjA5OSw0Ny4yMTUsMC4yMTYgYzQuMjEtNC4wMjIsNy42MzItMTAuMTk3LDEyLjU2My0xMS43NDljNC43MzEtMS40ODEsMTAuOTE4LDEuODMyLDE2LjQ5MiwyLjg2MWMzLjI2MSwwLjYwMiw2LjU3NiwwLjk4OCw5Ljg4OSwxLjE3NiBjMy4zMTQsMC4yLDYuNjQyLDAuMDQxLDEwLjgxMiwwLjA0MWMtMS4xMSwxLjQ1NS0xLjczNywyLjQ4NC0yLjU1MiwzLjMxNGMtOC42ODgsOC43MjYtMTcuMzM0LDE3LjQ3OS0yNi4xMTUsMjYuMDk5IGMtOS42NjIsOS40NzUtMjEuMjIxLDE1LjI0OS0zNC42MjUsMTcuMzQ3Yy0xLjEyMywwLjE3NC0yLjE3OSwwLjY2OC0zLjI3NCwxLjAxNmMtNC42NjQsMC05LjMxNSwwLTEzLjk3OSwwIGMtMC44OTYtMC4zNDgtMS43NjQtMC44NjktMi43LTEuMDE2Yy0yNi41MTQtNC41MDQtNDYuMzMzLTIzLjEyLTUyLjQ0LTQ5LjI4NmMtMC41MjEtMi4yMi0xLjE3Ni00LjM5Ni0xLjc2NC02LjU4OSBDMTkwLjg0MiwzNzIuNjYzLDE5MC44NDIsMzY3Ljk5OSwxOTAuODQyLDM2My4zNDl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0Q2MEYzMCIgZD0iTTI5NS40MDIsMjQxLjA1NGM5LjM4MS05LjgwOSwxOS4xMS0yMS44MjIsMzAuNjcxLTMxLjcxMmMyNS40NzItMjEuODExLDY0LjE2LTE4LjY4Myw4Ny4wMTMsNS45MzQgYzIzLjAzOSwyNC44MTcsMjIuODkyLDYzLjQ2NS0wLjY1NSw4Ny42OTRjLTE0LjgzNCwxNS4yNzYtMjkuODY5LDMwLjM1LTQ1LjE3LDQ1LjE1OGMtMjYuODYyLDI1Ljk5My03MS4zNzgsMjIuNzMxLTk0LjE2My02LjQ5NiBjLTIuNDQ2LTMuMTI2LTIuNDk5LTQuOTg0LDAuNDgxLTcuNzYzYzYuMzA4LTUuODY4LDEyLjI0MS0xMi4xNDgsMTguNTM2LTE4LjQ3YzYuNjAyLDEyLjIyOSwxNi4yNjQsMTkuMzY0LDI5LjkyMSwyMC4wMDYgYzkuNTgyLDAuNDU1LDE3Ljk4OC0yLjksMjQuODE2LTkuNjc2YzE0LjQwOC0xNC4yODYsMjguODE0LTI4LjU4NSw0My4wNDctNDMuMDQ1YzEzLjMxLTEzLjUyNCwxMy4yNzEtMzQuMzczLDAuMTYtNDcuNTQ5IGMtMTMuMDk4LTEzLjE3Ny0zMy45NTktMTMuMjU3LTQ3LjU2My0wLjEzNGMtMy43MTUsMy41ODMtNy4yMTgsNy4zNzctMTEuMDEzLDEwLjg1MmMtMS4wMjksMC45MzYtMi45MTIsMS43MTEtNC4xOTYsMS40ODMgQzMxNi4xMzEsMjQ1LjI3OCwzMDUuMDIzLDI0Mi45NzksMjk1LjQwMiwyNDEuMDU0eiI+PC9wYXRoPjwvc3ZnPg==", head: "Seamlessly Connects With Accounting", p: "Saves time and minimizes errors by synchronizing master data and transaction postings without the use of manual batch files that can easily lead to reconciliation headaches." },
        ],
        Features: [
            { id: "InventoryManagement", title: "Inventory Control", ll1: "Supports both serial (itemized) and bulk inventory models.", ll2: "Tracks products in real-time by warehouse, lot, raw/finished goods and more.", ll3: "Allows negative inventory positions and simplifies adjustments to match physicals.", ll4: "Custom barcode labels and scanning support improves identification and accuracy of product movements, pack and pick, stock identification and cycle counts.", ll5: "Values products with at a landed cost, capitalizing freight, storage & processing costs." },
            { id: "Ciedispatch", title: "Dispatch Management", ll1: "Manages on-demand, scheduled, one-time and recurring service requests for equipment drop-offs, pickups, switches and more.", ll2: "Supports multi-stop pickups, bale routes and municipal stream allocations.", ll3: "Generates driver tickets and route sheets.", ll4: "Monitors performance to meet service level demands.", ll5: "Features optional mobile dispatch app for drivers." },
        ],
        Tool: [
            { img: laptop, head: "WEB APPLICATIONS", title: "Self-Service Portal", p: "cieTrade’s self-service portal gives supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.", id: "SelfServices" },
            { img: mobile, head: "MOBILE APPS", title: "cieDispatch", p: "cieDispatch is a free mobile app that lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even…", id: "Ciedispatch" },
        ],
    };
    const faqs = [
        {
            question: "What kinds of agricultural commodities does cieTrade support?",
            answer: "cieTrade supports a wide range of agricultural commodities and food including beef, poultry, hay, tea, nuts, spices, softs and grains and more.",
        },
        {
            question: "Does cieTrade support scale integration?",
            answer: "Yes, cieTrade offers direct integration with floor, truck, and forklift scales to pull scaled product weights directly into the system. Users can also link multiple scales to device running cieTrade, and select which scale they want to read from. This feature only works with scales that have an IP Address.",
        },
        {
            question: "Can I attach product photos to my orders?",
            answer: "Yes, cieTrade’s unique design makes it fast and easy to record and attach container and product photos, external documents, and more to all of your orders and tickets. cieTrade also supports IP camera integration so you can easily record received product quality at your warehouse.",
        },
    ];
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div>
                <div className="relative bg-cover h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/dreamstime_m_34659237-scaled.jpg.webp')` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <Container className="relative py-40">
                        <h1 className="text-6xl py-4 text-white font-bold">Agricultural <br />Commodities Software</h1>
                        <a href={'/Bagricultural'}><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 mt-4 leading-tight">Download Brochure <i class="fa-solid fa-arrow-right ps-2"></i></button></a>
                    </Container>
                </div>
                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/agriculture-trading-clients-logos-DARK.png.webp" className='w-full py-4 bg-light' />
            </div>

            <div className='py-5'>
                <Container>
                    <Row>
                        <h1 className='text-4xl text-center font-bold py-4'>Benefits of cieTrade's Agricultural Commodities Software</h1>
                        {data.forms.map((item, index) => (
                            <Col lg={4} md={6} sm={12} key={index} className='text-center'>
                                <div className='p-5 mt-5 hover:shadow-2xl bg-white'>
                                    <img src={item.img} className='w-16 pb-4 img-fluid justify-center m-auto' />
                                    <h1 className='font-bold text-2xl'>{item.head}</h1>
                                    <p className='pt-4 text-gray-500 text-lg'>{item.p}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className='bg-zinc-800 text-center py-5 lg:px-60'>
                 <i class="fa-solid fa-quote-left text-white bg-red-600 p-1 rounded-full px-2 text-2xl"></i>
                <h6 className='text-white text-xl py-3 lh-base lg:px-80'>cieTrade's platform has helped streamline our sales and purchase activity while providing extensive profitability reporting, ensuring the success of our trading business.Their support team is top notch and is always available to our business needs.</h6>
                <h6 className='text-white text-xl '>Al Gerrard, Director of Operations</h6>
                <center><img src={group} alt="group" className='h-10/12 img-fluid pt-4' /></center>
            </div>

            <Container>
                <Row>
                    <h1 className='text-4xl text-center font-bold py-20'>Key Features of cieTrade's Agricultural Commodities Software</h1>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Pricing & Orders</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Handles both spot and contract orders.</li>
                            <li className='list-disc text-gray-500 text-lg'>Allows you to establish pricing by account, product, weight, packaging type, per each and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports market and index-formula pricing.</li>
                            <li className='list-disc text-gray-500 text-lg'>Automatically rolls‐over pricing agreements.</li>
                            <li className='list-disc text-gray-500 text-lg'>Features “confirmed pricing workflow” to avoid settlements on unconfirmed prices.</li>
                            <li className='list-disc text-gray-500 text-lg'>Provides a central dashboard to manage and edit pricing and view pricing history from one place.</li>
                            <li className='list-disc text-gray-500 text-lg'>Shows real-time order status, budget to actual analysis, and more.</li>
                        </ul>
                    </Col>
                    {data.Features.map((item, index) => (
                        <Col lg={6} md={6} sm={12} className='py-5'>
                            <div key={index}>
                                <h1 className='font-bold text-2xl'>{item.title}</h1>
                                <ul className='py-3 px-4'>
                                    <li className='list-disc text-gray-500 text-lg'>{item.ll1}</li>
                                    <li className='list-disc text-gray-500 text-lg'>{item.ll2}</li>
                                    <li className='list-disc text-gray-500 text-lg'>{item.ll3}</li>
                                    <li className='list-disc text-gray-500 text-lg'>{item.ll4}</li>
                                    <li className='list-disc text-gray-500 text-lg'>{item.ll5}</li>
                                    <a href={item.id}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                                </ul>
                            </div>
                        </Col>
                    ))}
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Brokerage & Export</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Unique buy/sell brokerage form allows you to buy and sell in different weights, units of measure, currencies, product names, and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Organizes financial and logistical data around each load, while attaching emails and documents in a single form, just like a file folder.</li>
                            <li className='list-disc text-gray-500 text-lg'>Automatically matches expense accruals with revenue on a trade-by-trade basis to instantly determine gross profit.</li>
                            <li className='list-disc text-gray-500 text-lg'>Built-in workflows manage and coordinate ocean booking requests and automate related tasks.</li>
                            <li className='list-disc text-gray-500 text-lg'>Tracks activity, cutoff dates, rollovers, notifications, container allocations, fulfillment and more.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Documentation & Email</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Automatically generates all of your specialized shipping and billing documentation for inland or ocean transport using fully customizable templates and digital signatures.</li>
                            <li className='list-disc text-gray-500 text-lg'>Predefined document types include: packing lists, bills of lading, confirmations, freight and shipping instructions, commercial invoices and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Captures and saves emails directly from Outlook.</li>
                            <li className='list-disc text-gray-500 text-lg'>Emails documentation, photos, and file attachments to your clients or trading partners directly from cieTrade in one click.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Pricing & Orders</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Shows the projected profitability of every shipment.</li>
                            <li className='list-disc text-gray-500 text-lg'>Generates all of the specialized, Excel friendly reports and multilevel drill-down inquiries you need to manage daily activity and business performance.</li>
                            <li className='list-disc text-gray-500 text-lg'>Advanced reports include: gross profit by customer, supplier, product and more, tonnage and pricing trends, order matching and fulfillment, settlement statements, commissions and much more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Integrated Self-Service Portal provides your customers and trading partners with on-demand access and visibility to shipments, pricing, payments, documents and more.</li>
                            <a href={'/SelfServices'}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className='text-center py-28 lg:px-80'>
                <h1 className='text-4xl font-bold'>Want to see a full list of features?</h1>
                <h1 className='text-4xl font-bold text-red-600 py-3'>Download our agricultural commodities software brochure</h1>
                <a href={'/Bagricultural'}><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 mt-3 leading-tight">Download Brochure <i class="fa-solid fa-arrow-right ps-2"></i></button></a>
            </div>

            <div className='bg-light pt-20'>
                <Container className='lg:px-12'>
                    <h1 className='text-4xl text-center font-bold'>Additional Tools</h1>
                    <Row>
                        {data.Tool.map((item, index) => (
                            <Col lg={6} md={6} sm={12} className='py-5' key={index}>
                                <img src={item.img} alt="" className='w-full img-fluid' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>{item.head}</h1>
                                <h1 className='font-bold text-3xl py-3'>{item.title}</h1>
                                <p className='text-gray-500 text-lg'>{item.p}</p>
                                <a href={item.id}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="max-w-5xl mx-auto p-4">
                    <h1 className="text-4xl font-bold text-center py-5">FAQ</h1>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`border-1 py-2 transition-all duration-300 ${activeIndex === index ? "border-red-600 shadow-sm" : "border-gray-300"}`}>
                                <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
                                    <h2 className={`font-bold text-xl transition-all duration-300 ${activeIndex === index ? "text-red-600" : "text-gray-500"}`}>{faq.question}</h2>
                                    <span className={`text-3xl font-bold transition-all duration-300 ${activeIndex === index ? "text-red-600" : "text-gray-500"}`} >{activeIndex === index ? "-" : "+"}</span>
                                </div>
                                {activeIndex === index && (
                                    <div className="p-4 text-gray-600 text-lg">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Agricultural;