import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import i1 from '../../assets/img/i1.png';
import i2 from '../../assets/img/i2.png';
import i4 from '../../assets/img/i4.png';
import i5 from '../../assets/img/i5.png';
import norkol from '../../assets/logo/norkol.webp';
import mobile from '../../assets/img/mobile3.webp';
import laptop from '../../assets/img/laptop1.webp';

function Merchant() {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = {
        forms: [
            { img: i1, head: "Lets You Work More Effectively", p: "cieTrade helps agriculture traders manage their critical business data and operations from one place that can be instantly and securely accessed from anywhere." },
            { img: i2, head: "Organizes Your Agriculture Operation", p: "Our unique worksheet concept provides complete control, traceability and oversight of your product lifecycles from origin through manufacturing and shipping." },
            { img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2NTZweCIgaGVpZ2h0PSIxNjQ0cHgiIHZpZXdCb3g9Ii0yOC4yNSAtMjcgMTY1NiAxNjQ0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZGVmcz48L2RlZnM+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xMTIuOTg2LDBjMzEuMzMsMCw2Mi42NTksMCw5My45ODgsMCBjMjUuMzUxLDExLjE0Myw0Ni4xNDgsMzAuODU2LDUwLjk5NCw2Mi45OTJjNC4yMTcsMjcuOTY3LDEsNjIuNzA2LDEsOTYuOTg4YzAsNDcuMjc4LDUuOTY5LDk5Ljc4NS05Ljk5OSwxMjUuOTg0IGMtMjAuODg5LDM0LjI3My02OC4yNTUsNDMuODExLTEyMy45ODQsMzUuOTk2Yy0zMC44NDUtNC4zMjYtNjAuNjQ1LTI5Ljc5NS02My45OTItNjkuOTkyYy0yLjI5NC0yNy41NSwwLTYyLjM2OSwwLTk1Ljk4OCBjMC0zMy42NzMtMi43NjgtNjguMTIyLDEtOTQuOTg4QzY2LjAxNCwzMi4zMTYsODYuNTQyLDEwLjEwMSwxMTIuOTg2LDB6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0zNDYuOTU3LDBjMjEuMzMxLDAsNDIuNjYyLDAsNjMuOTkyLDAgYy0xMS4zNzYsODYuMjc4LTIyLjQyNiwxNzIuODgzLTMzLjk5NSwyNTguOTY4YzI1My4yLDQwLjE2MSw1OTEuMDgsMzguMzQ4LDg0NS44OTUsMUMxMjExLjUxLDE3My4zMTgsMTIwMC4xODksODYuNjQ5LDExODguODUyLDAgYzIxLjMzLDAsNDIuNjYxLDAsNjMuOTkyLDBjMTguNzIzLDEzOC4yNTQsMzcuNDQ3LDI3Ni41MTUsNTQuOTkyLDQxNS45NDhjOTUuODM2LTMuNDEzLDE0OS42MzUsMzIuNjIzLDE3Ny45NzksOTIuOTg4IGMxMS42ODksMjQuODk2LDE3Ljk5OCw1MC4wMDMsMTcuOTk4LDg0Ljk4OWMwLDYzLjcyMywwLjgzOSwxMzUuNzc0LTEsMjA1Ljk3NWMtNDY4LjkyMSwwLTkzNy44OSwwLTE0MDYuODI0LDAgYzMuMzY3LTgwLjYzMy00Ljk2Ni0xNTkuOTg3LDEtMjI5Ljk3MmM1LjY4OS02Ni43NDgsNDMuNjE3LTExNC43MjksOTIuOTg5LTEzNy45ODJjMjcuMzEzLTEyLjg2NCw1OC45NjctMTcuNDI5LDEwMS45ODctMTUuOTk4IEMzMDkuNDcyLDI3Ni40NzksMzI4LjgxNCwxMzguODM1LDM0Ni45NTcsMHogTTU3NS45MjgsNTc0LjkyOGMwLDMwLjExNi01LjU1NSw3My44MjUsMyw5Ni45ODggYzE0Ljg2Niw0MC4yNTEsNjYuMzUzLDMxLjk5NiwxMjIuOTg0LDMxLjk5NmM2Ny4yOCwwLDEyNi43MzQsMCwxOTQuOTc2LDBjMjkuNTQ4LDAsNzMuMjQ3LDUuMDMsOTQuOTg4LTMgYzQwLjc0OC0xNS4wNDksMzEuOTk2LTY2LjczMywzMS45OTYtMTIyLjk4NGMwLTMzLjYyNyw1LjcyNi03My4zNjQtMi45OTktOTYuOTg4Yy01LjQ0NS0xNC43NDMtMTguODIyLTI0Ljk3OS0yOC45OTctMjguOTk3IGMtMjIuNzM1LTguOTc4LTY0Ljk1Mi0zLjk5OS04OC45ODktMy45OTljLTYyLjE2NCwwLTEyOC4wOTYsMC0xODcuOTc2LDBjLTI5LjQ2MiwwLTY2LjgzMy0yLjg4OC05NC45ODgsMSBDNTY3LjE4NSw0NTYuMjI2LDU3NS45MjgsNTEyLjIwMiw1NzUuOTI4LDU3NC45Mjh6IE0yNTUuOTY4LDY0NC45MTljMCwxNy43MDctMi43Nyw0NC4yMjQsNiw1Mi45OTNjNy43NTYsNy43NTYsMjMuNjQsNiw0MS45OTUsNiBjMTQuODM3LDAsMzIuMjcsMCw0OC45OTQsMGMyMy4wNzIsMCw3OS4zMDgsNS4zNzYsODkuOTg4LTYuOTk5YzguMTA4LTkuMzk2LDUtMzUuMjQxLDUtNTcuOTkzYzAtMTguMTE2LDIuNzI5LTQ4LjI2NS02LTU2Ljk5MyBjLTEyLjM2Ni0xMi4zNjYtNjAuMjk0LTYtODAuOTktNmMtMjguOTYzLDAtNjMuMjY4LTQuNjE3LTg3Ljk4OSwxQzI0OS42MDksNTgyLjIzNSwyNTUuOTY4LDYxMS44NjYsMjU1Ljk2OCw2NDQuOTE5eiAgTTExNTEuODU1LDY0NC45MTljMCwxNy43MDctMi43Nyw0NC4yMjQsNiw1Mi45OTNjNy43NTYsNy43NTYsMjMuNjQxLDYsNDEuOTk0LDZjMTQuODM3LDAsMzIuMjcsMCw0OC45OTQsMCBjMjMuMDcyLDAsNzkuMzA5LDUuMzc2LDg5Ljk4OC02Ljk5OWM4LjEwOS05LjM5Niw1LTM1LjI0MSw1LTU3Ljk5M2MwLTE4LjExNiwyLjcyOS00OC4yNjUtNi01Ni45OTMgYy0xMi4zNjUtMTIuMzY2LTYwLjI5NC02LTgwLjk4OS02Yy0yOC45NjMsMC02My4yNjgtNC42MTctODcuOTg5LDFDMTE0NS40OTcsNTgyLjIzNSwxMTUxLjg1NSw2MTEuODY2LDExNTEuODU1LDY0NC45MTl6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xNDA5LjgyNCwyYzE5LjUzMS0yLjE5Miw1Ny45My0zLjQ1OSw3NC45OSwxIGMyNC44NDgsNi40OTUsNDUuODUyLDI4LjAyOCw1MS45OTMsNTEuOTk0YzYuNjU1LDI1Ljk2OCwyLjAwMSw3NS44MDcsMiwxMDYuOTg3Yy0wLjAwMSwzNS44NTEsNC42MTYsOTMuNzc2LTUuOTk5LDExNi45ODUgYy05LjA1OCwxOS44MDItMjguODQ4LDM2LjUxMi00OS45OTQsNDEuOTk1Yy0yMC4yNjYsNS4yNTQtNjAuNzk2LDUuMDMxLTgxLjk5LDBjLTI1LjA1Ni01Ljk0OC00NC4xODQtMjQuNjQ5LTUxLjk5Mi00Ny45OTQgYy04LjU5OC0yNS42OTgtNC03NC43NS00LTEwNy45ODZjMC0zOC4yODUtNS41MzEtODEuMTc2LDItMTA5Ljk4NkMxMzU0LjA3MiwyNy4yOSwxMzc4LjYxLDUuNTA0LDE0MDkuODI0LDJ6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik05Ni45ODgsODYzLjg5MmM0NjguOTM1LDAsOTM3LjkwNCwwLDE0MDYuODI1LDAgYzAsNTMuMzI3LDAsMTA2LjY1MywwLDE1OS45OGMtNDY5LjI4OSwwLTkzOC41MjcsMC0xNDA3LjgyNCwwYzAtNTIuMzI3LDAtMTA0LjY1NCwwLTE1Ni45OCBDOTUuOTAyLDg2NS40NzMsOTUuODIzLDg2NC4wNjEsOTYuOTg4LDg2My44OTJ6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xNTk5LjgsMTE1MS44NTVjMCwyMS4zMzEsMCw0Mi42NjIsMCw2My45OTIgYy01MzMuMjg5LDAtMTA2Ni40NzksMC0xNTk5LjgsMGMwLTIxLjMzLDAtNDIuNjYxLDAtNjMuOTkyYzM5Ljk5NSwwLDc5Ljk5LDAsMTE5Ljk4NSwwYy0xMC41MzEtMTQuODAxLTI0LjQ4Ni0zNC44MzgtMjMuOTk3LTYzLjk5MSBjMTA2LjMxOCwwLjY2NiwyMTUuMzA4LTEuMzMzLDMxOS45NiwwLjk5OWMwLjAzOSwyMS40NzctNy44NDIsMzguNjI1LTE1Ljk5OCw1MC45OTRjLTMuMTQ4LDQuNzczLTguMjg5LDkuNDk4LTYuOTk5LDExLjk5OCBjMjcxLjY0NSwwLDU0My4yNTcsMCw4MTQuODk4LDBjLTEwLjUzMS0xNC44MDEtMjQuNDg2LTM0LjgzOC0yMy45OTgtNjMuOTkxYzEwNi4zMTgsMC42NjYsMjE1LjMwOS0xLjMzMywzMTkuOTYxLDAuOTk5IGMwLjAzOSwyMS40NzctNy44NDIsMzguNjI1LTE1Ljk5OCw1MC45OTRjLTMuMTQ4LDQuNzczLTguMjg5LDkuNDk4LTcsMTEuOTk4QzE1MjAuNDc3LDExNTEuODU1LDE1NjAuMTM5LDExNTEuODU1LDE1OTkuOCwxMTUxLjg1NXogIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0yMjQuOTcyLDEyNDcuODQ0YzIwLjk5OCwwLDQxLjk5NSwwLDYyLjk5MiwwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTctMjUuMDE3LDQwLjk5NS0zOS45OTVjMTMuMDE2LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk0LTM4Ljk5NSBjMjguMTg1LTkuMTY2LDQ5Ljg4OCwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNDksMTMuMzc0LTI2LjYzMSwzMC43MzYtMzcuOTk1LDQxLjk5NSBjLTQwLjg0MSw0MC40NjEtODAuODA1LDc5LjYzNC0xMTkuOTg1LDExOS45ODVjLTQxLjc4My0zOC4yNDQtNzkuOS03OS4yMzYtMTIxLjk4NC0xMjAuOTg1IGMtMTEuNjA4LTExLjUxNi0zNC43NTEtMjcuNTYzLTM4Ljk5NS00MS45OTVjLTcuNDA2LTI1LjE4LDE0Ljg1My00OS43Nyw0MS45OTQtNDAuOTk0YzE3LjE5Nyw1LjU2LDMwLjA2NSwyNS4wNjQsNDMuOTk1LDM4Ljk5NSBjMTQuNDkyLDE0LjQ5MiwyOS4yMTEsMjguNTY2LDQxLjk5NCw0MC45OTVDMjI0LjYzOSwxMzg3LjQ5MiwyMjIuNjM5LDEzMTUuNTA0LDIyNC45NzIsMTI0Ny44NDR6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik03NjguOTA0LDEyNDcuODQ0YzIwLjk5OCwwLDQxLjk5NSwwLDYyLjk5MywwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTYtMjUuMDE3LDQwLjk5NC0zOS45OTVjMTMuMDE2LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk0LTM4Ljk5NSBjMjguMTg2LTkuMTY2LDQ5Ljg4OSwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNDksMTMuMzc0LTI2LjYzLDMwLjczNi0zNy45OTUsNDEuOTk1Yy00MC44NDEsNDAuNDYxLTgwLjgwNSw3OS42MzQtMTE5Ljk4NCwxMTkuOTg1IGMtNDEuNzg0LTM4LjI0NC03OS45MDEtNzkuMjM2LTEyMS45ODUtMTIwLjk4NWMtMTEuNjA4LTExLjUxNi0zNC43NS0yNy41NjMtMzguOTk1LTQxLjk5NWMtNy40MDYtMjUuMTgsMTQuODUzLTQ5Ljc3LDQxLjk5NS00MC45OTQgYzE3LjE5Nyw1LjU2LDMwLjA2NSwyNS4wNjUsNDMuOTk1LDM4Ljk5NWMxNC40OTMsMTQuNDkyLDI5LjIxMSwyOC41NjYsNDEuOTk1LDQwLjk5NSBDNzY4LjU3LDEzODcuNDkyLDc2Ni41NzEsMTMxNS41MDQsNzY4LjkwNCwxMjQ3Ljg0NHoiPjwvcGF0aD48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0Q3MUYzMCIgZD0iTTEzMTIuODM2LDEyNDcuODQ0YzIwLjk5NywwLDQxLjk5NCwwLDYyLjk5MiwwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTYtMjUuMDE3LDQwLjk5NC0zOS45OTVjMTMuMDE3LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk1LTM4Ljk5NSBjMjguMTg1LTkuMTY2LDQ5Ljg4OCwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNSwxMy4zNzQtMjYuNjMxLDMwLjczNi0zNy45OTYsNDEuOTk1Yy00MC44NCw0MC40NjItODAuODA1LDc5LjYzNC0xMTkuOTg0LDExOS45ODUgYy00MS43ODMtMzguMjQ0LTc5LjktNzkuMjM2LTEyMS45ODQtMTIwLjk4NWMtMTEuNjA5LTExLjUxNi0zNC43NTItMjcuNTYzLTM4Ljk5Ni00MS45OTVjLTcuNDA1LTI1LjE4LDE0Ljg1NC00OS43Nyw0MS45OTUtNDAuOTk0IGMxNy4xOTcsNS41NiwzMC4wNjUsMjUuMDY1LDQzLjk5NSwzOC45OTVjMTQuNDkyLDE0LjQ5MiwyOS4yMTEsMjguNTY2LDQxLjk5NCw0MC45OTUgQzEzMTIuNTAyLDEzODcuNDkyLDEzMTAuNTAzLDEzMTUuNTA0LDEzMTIuODM2LDEyNDcuODQ0eiI+PC9wYXRoPjwvc3ZnPg==", head: "Integrates With Your Scales", p: "cieTrade offers seamless scale integration with truck, floor, and forklift scales with optional stored tare weights to save time and improve accuracy." },
            { img: "data:image/png;base64,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", head: "Helps Avoid Oversights", p: "cieTrade’s built-in workflow tools for agriculture trading, notifications and alerts help you track critical tasks so that nothing gets overlooked by your back office." },
            { img: i5, head: "Provides Critical Business Insights", p: "cieTrade provides valuable business intelligence with real-time gross profit reports by customer, supplier, product, tonnage trend and more, helping you make better decisions." },
            { img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0MHB4IiBoZWlnaHQ9IjI0MHB4IiB2aWV3Qm94PSIxOTAuNTIyIDE5NC40NjggMjQwIDI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI0Q2MEYzMCIgZD0iTTE5MC44NDIsMzYzLjM0OWMwLjY2OC0yLjcyOCwxLjM2NC01LjQzOSwxLjk5MS04LjE2N2MyLjYzMy0xMS4yNzgsNy45MjUtMjEuMTU1LDE2LjAzNy0yOS4zNzIgYzE0Ljg0OC0xNS4wMjIsMjkuNjgxLTMwLjA3LDQ0LjgyMy00NC43OTdjMjcuMDIyLTI2LjI3Myw3MS41NjQtMjMuMTA2LDk0LjQ5Nyw2LjQwMWMyLjIwNSwyLjgzMywyLjY3Myw0LjYzNy0wLjI5NCw3LjM5MSBjLTYuMzM2LDUuODY3LTEyLjI2OCwxMi4xNzQtMTguNjU2LDE4LjU5Yy0xLjAyOS0xLjY0NS0xLjg0NC0yLjk4MS0yLjY5OS00LjMwNGMtMTEuNjk0LTE4LjAxNS0zNi41MzgtMjEuMTAyLTUxLjkyLTYuMTM0IGMtMTQuNzgsMTQuMzgxLTI5LjM2MSwyOC45ODctNDMuNzUzLDQzLjc1NGMtMTIuOTksMTMuMzM4LTEyLjYyOSwzNC4xODYsMC40MjcsNDcuMTc0YzEzLjA0MywxMi45NzgsMzMuNzMxLDEzLjA5OSw0Ny4yMTUsMC4yMTYgYzQuMjEtNC4wMjIsNy42MzItMTAuMTk3LDEyLjU2My0xMS43NDljNC43MzEtMS40ODEsMTAuOTE4LDEuODMyLDE2LjQ5MiwyLjg2MWMzLjI2MSwwLjYwMiw2LjU3NiwwLjk4OCw5Ljg4OSwxLjE3NiBjMy4zMTQsMC4yLDYuNjQyLDAuMDQxLDEwLjgxMiwwLjA0MWMtMS4xMSwxLjQ1NS0xLjczNywyLjQ4NC0yLjU1MiwzLjMxNGMtOC42ODgsOC43MjYtMTcuMzM0LDE3LjQ3OS0yNi4xMTUsMjYuMDk5IGMtOS42NjIsOS40NzUtMjEuMjIxLDE1LjI0OS0zNC42MjUsMTcuMzQ3Yy0xLjEyMywwLjE3NC0yLjE3OSwwLjY2OC0zLjI3NCwxLjAxNmMtNC42NjQsMC05LjMxNSwwLTEzLjk3OSwwIGMtMC44OTYtMC4zNDgtMS43NjQtMC44NjktMi43LTEuMDE2Yy0yNi41MTQtNC41MDQtNDYuMzMzLTIzLjEyLTUyLjQ0LTQ5LjI4NmMtMC41MjEtMi4yMi0xLjE3Ni00LjM5Ni0xLjc2NC02LjU4OSBDMTkwLjg0MiwzNzIuNjYzLDE5MC44NDIsMzY3Ljk5OSwxOTAuODQyLDM2My4zNDl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0Q2MEYzMCIgZD0iTTI5NS40MDIsMjQxLjA1NGM5LjM4MS05LjgwOSwxOS4xMS0yMS44MjIsMzAuNjcxLTMxLjcxMmMyNS40NzItMjEuODExLDY0LjE2LTE4LjY4Myw4Ny4wMTMsNS45MzQgYzIzLjAzOSwyNC44MTcsMjIuODkyLDYzLjQ2NS0wLjY1NSw4Ny42OTRjLTE0LjgzNCwxNS4yNzYtMjkuODY5LDMwLjM1LTQ1LjE3LDQ1LjE1OGMtMjYuODYyLDI1Ljk5My03MS4zNzgsMjIuNzMxLTk0LjE2My02LjQ5NiBjLTIuNDQ2LTMuMTI2LTIuNDk5LTQuOTg0LDAuNDgxLTcuNzYzYzYuMzA4LTUuODY4LDEyLjI0MS0xMi4xNDgsMTguNTM2LTE4LjQ3YzYuNjAyLDEyLjIyOSwxNi4yNjQsMTkuMzY0LDI5LjkyMSwyMC4wMDYgYzkuNTgyLDAuNDU1LDE3Ljk4OC0yLjksMjQuODE2LTkuNjc2YzE0LjQwOC0xNC4yODYsMjguODE0LTI4LjU4NSw0My4wNDctNDMuMDQ1YzEzLjMxLTEzLjUyNCwxMy4yNzEtMzQuMzczLDAuMTYtNDcuNTQ5IGMtMTMuMDk4LTEzLjE3Ny0zMy45NTktMTMuMjU3LTQ3LjU2My0wLjEzNGMtMy43MTUsMy41ODMtNy4yMTgsNy4zNzctMTEuMDEzLDEwLjg1MmMtMS4wMjksMC45MzYtMi45MTIsMS43MTEtNC4xOTYsMS40ODMgQzMxNi4xMzEsMjQ1LjI3OCwzMDUuMDIzLDI0Mi45NzksMjk1LjQwMiwyNDEuMDU0eiI+PC9wYXRoPjwvc3ZnPg==", head: "Seamlessly Connects With Accounting", p: "Saves time and minimizes errors by synchronizing master data and transaction postings without the use of manual batch files that can easily lead to reconciliation headaches." },
        ],
        Tool: [
            { img: laptop, head: "WEB APPLICATIONS", title: "Self-Service Portal", p: "cieTrade’s self-service portal gives customers and supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.", id: "SelfServices" },
            { img: mobile, head: "MOBILE APPS", title: "cieLocation", p: "cieTrade’s inventory scanning app helps your warehouse quickly check and edit inventory, confirm inventory availability and minimize time spent with stock and cycle counts.", id: "Cielocation" },
        ],
    };
    const faqs = [
        {
            question: "Does cieTrade support scale integration?",
            answer: "Yes, cieTrade offers direct integration with floor, truck, and forklift scales to pull scaled material weights directly into the system. This feature only works with scales that have an IP Address.",
        },
        {
            question: "Can I attach material photos to my orders and tickets?",
            answer: "Yes, cieTrade’s unique design makes it fast and easy for clients to record and attach container and material photos, external documents, and more to all of your orders and tickets.",
        },
        {
            question: "What kinds of converting processes does cieTrade handle?",
            answer: "Our converting module handles processes such as rewinding, splicing, sheeting and more while tracking yield/loss and capitalizing processing costs into your output products.",
        },
        {
            question: "Can I buy and sell in multicurrency?",
            answer: "Yes, cieTrade allows you to buy and sell in different weights, UOMs, currencies, and products.",
        },
    ];
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div>
                <div className="relative bg-cover h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/shutterstock_2007074588-scaled.jpg.webp')` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <Container className="relative py-40">
                        <h1 className="text-6xl text-white font-bold lh-xs">Paper Merchant and <br />Converting Software</h1>
                        <a href={'/Bmerchant'}><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 mt-4 leading-tight">Download Brochure <i class="fa-solid fa-arrow-right ps-2"></i></button></a>
                    </Container>
                </div>
                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/paper-merchants-client-logos-2.png.webp" className='w-full py-4 bg-light' />
            </div>

            <div className='py-5'>
                <Container>
                    <Row>
                        <h1 className='text-4xl text-center font-bold py-4'>Benefits of cieTrade's Paper Merchant and Converting Software</h1>
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

            <div className='bg-zinc-800 text-center py-5'>
                 <i class="fa-solid fa-quote-left text-white bg-red-600 p-1 rounded-full px-2 text-2xl"></i>
                <h6 className='text-white text-xl py-3 lh-base lg:px-80'>Having worked with cieTrade at two different companies over many years, their solution has proved critical to supporting diverse needs and changing requirements in the paper industry. It has allowed us to gain visibility into inventory costs and sales to improve decision making while their integrated mobile apps have streamlined our warehouse operations and reduced errors. Their support team has been extremely responsive in handling issues and requests and providing the technical expertise needed to deliver custom integration solutions.</h6>
                <h6 className='text-white text-xl '>Al Gerrard, Director of Operations</h6>
                <center><img src={norkol} alt="group" className='h-10/12 img-fluid pt-4' /></center>
            </div>

            <Container>
                <Row>
                    <h1 className='text-4xl text-center font-bold py-20'>Key Features of cieTrade's Paper Merchant and Converting Software</h1>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Pricing & Orders</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Handles both spot and contract orders.</li>
                            <li className='list-disc text-gray-500 text-lg'>Allows you to establish pricing by account, weight, MSF, per each and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports market and index-formula pricing.</li>
                            <li className='list-disc text-gray-500 text-lg'>Automatically rolls‐over pricing agreements.</li>
                            <li className='list-disc text-gray-500 text-lg'>Features “confirmed pricing workflow” to avoid settlements on unconfirmed prices.</li>
                            <li className='list-disc text-gray-500 text-lg'>Provides a central dashboard to manage and edit pricing and view pricing history from one place.</li>
                            <li className='list-disc text-gray-500 text-lg'>Shows real-time order status, budget to actual analysis, and more.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Paper Converting</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Supports user definable job types and equipment such as rewinding, splicing, sheeting and other processes.</li>
                            <li className='list-disc text-gray-500 text-lg'>Tracks waste, labor, overhead and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Helps identify material genealogy and consumption by parent-roll, supplier, and buyer for increased material quality control & accountability.</li>
                            <li className='list-disc text-gray-500 text-lg'>Uses landed cost valuation that capitalizes processing, freight, and storage, and costs for more accurate reporting of cost of goods and gross profit.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Inventory Control</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Tracks user-definable paper stock attributes including basis weight, caliper, roll/sheet size, core and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports both serial (itemized) and bulk inventory models.</li>
                            <li className='list-disc text-gray-500 text-lg'>Track material in real-time by warehouse, lot, raw/finished goods and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Custom barcode labels and scanning support improves identification and accuracy of material movements, pack and pick, stock identification and cycle counts.</li>
                            <li className='list-disc text-gray-500 text-lg'>Values material with at a landed cost, capitalizing freight, storage & processing costs.</li>
                            <a href={'/InventoryManagement'}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Logistics Management</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Built-in workflow features help organize open orders, in-process shipments, approvals, logistics notifications and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Quickly find shipments by any reference including order, pickup, truck and invoice number, bill of lading, carrier, and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Each transaction groups all financial and logistical information for the shipment.</li>
                            <li className='list-disc text-gray-500 text-lg'>Document Event tracking helps you stay on top of shipping requirements and notifications.</li>
                            <li className='list-disc text-gray-500 text-lg'>Universal search engine makes it easy to retrieve attached documents and photos from anywhere in the system.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Documentation & Email</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Automatically generates all of your specialized shipping and billing documentation for inland or ocean transport using fully customizable templates and digital signatures.</li>
                            <li className='list-disc text-gray-500 text-lg'>Predefined document types include: packing lists, bills of lading, confirmations, freight and shipping instructions, commercial invoices and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Captures and saves emails directly from Outlook.</li>
                            <li className='list-disc text-gray-500 text-lg'>Emails documentation, photos, and file attachments to your clients or recycling partners directly from the cieTrade in one click</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Reporting</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Shows the projected profitability of every shipment.</li>
                            <li className='list-disc text-gray-500 text-lg'>Generates all of the specialized, Excel friendly reports and multilevel drill-down inquiries you need to manage daily activity and business performance.</li>
                            <li className='list-disc text-gray-500 text-lg'>Advanced reports include: gross profit by customer, supplier, product and more, tonnage and pricing trends, order matching and fulfillment, settlement statements, commissions and much more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Integrated Self-Service Portal provides your customers and supply chain partners with on-demand access and visibility to recovered material, shipments, pricing, payments, documents and more.</li>
                            <a href={'/SelfServices'}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className='text-center py-32'>
                <h1 className='text-4xl font-bold'>Want to see a full list of features?</h1>
                <h1 className='text-4xl font-bold text-red-600 py-3'>Download our paper merchant andconverting software brochure</h1>
                <a href={'/Bmerchant'}><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 mt-4 leading-tight">Download Brochure <i class="fa-solid fa-arrow-right ps-2"></i></button></a>
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

export default Merchant;