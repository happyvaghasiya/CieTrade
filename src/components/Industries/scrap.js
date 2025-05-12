import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import i1 from '../../assets/img/i1.png';
import i2 from '../../assets/img/i2.png';
import i4 from '../../assets/img/i4.png';
import i5 from '../../assets/img/i5.png';
import danco from '../../assets/logo/danco.webp';
import mobile from '../../assets/img/mobile4.webp';
import laptop from '../../assets/img/laptop1.webp';

function Scrap() {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = {
        forms: [
            { img: i1, head: "Lets You Work More Effectively", p: "cieTrade helps agriculture traders manage their critical business data and operations from one place that can be instantly and securely accessed from anywhere." },
            { img: i2, head: "Organizes Your Agriculture Operation", p: "Our unique worksheet concept provides complete control, traceability and oversight of your product lifecycles from origin through manufacturing and shipping." },
            { img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2NTZweCIgaGVpZ2h0PSIxNjQ0cHgiIHZpZXdCb3g9Ii0yOC4yNSAtMjcgMTY1NiAxNjQ0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZGVmcz48L2RlZnM+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xMTIuOTg2LDBjMzEuMzMsMCw2Mi42NTksMCw5My45ODgsMCBjMjUuMzUxLDExLjE0Myw0Ni4xNDgsMzAuODU2LDUwLjk5NCw2Mi45OTJjNC4yMTcsMjcuOTY3LDEsNjIuNzA2LDEsOTYuOTg4YzAsNDcuMjc4LDUuOTY5LDk5Ljc4NS05Ljk5OSwxMjUuOTg0IGMtMjAuODg5LDM0LjI3My02OC4yNTUsNDMuODExLTEyMy45ODQsMzUuOTk2Yy0zMC44NDUtNC4zMjYtNjAuNjQ1LTI5Ljc5NS02My45OTItNjkuOTkyYy0yLjI5NC0yNy41NSwwLTYyLjM2OSwwLTk1Ljk4OCBjMC0zMy42NzMtMi43NjgtNjguMTIyLDEtOTQuOTg4QzY2LjAxNCwzMi4zMTYsODYuNTQyLDEwLjEwMSwxMTIuOTg2LDB6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0zNDYuOTU3LDBjMjEuMzMxLDAsNDIuNjYyLDAsNjMuOTkyLDAgYy0xMS4zNzYsODYuMjc4LTIyLjQyNiwxNzIuODgzLTMzLjk5NSwyNTguOTY4YzI1My4yLDQwLjE2MSw1OTEuMDgsMzguMzQ4LDg0NS44OTUsMUMxMjExLjUxLDE3My4zMTgsMTIwMC4xODksODYuNjQ5LDExODguODUyLDAgYzIxLjMzLDAsNDIuNjYxLDAsNjMuOTkyLDBjMTguNzIzLDEzOC4yNTQsMzcuNDQ3LDI3Ni41MTUsNTQuOTkyLDQxNS45NDhjOTUuODM2LTMuNDEzLDE0OS42MzUsMzIuNjIzLDE3Ny45NzksOTIuOTg4IGMxMS42ODksMjQuODk2LDE3Ljk5OCw1MC4wMDMsMTcuOTk4LDg0Ljk4OWMwLDYzLjcyMywwLjgzOSwxMzUuNzc0LTEsMjA1Ljk3NWMtNDY4LjkyMSwwLTkzNy44OSwwLTE0MDYuODI0LDAgYzMuMzY3LTgwLjYzMy00Ljk2Ni0xNTkuOTg3LDEtMjI5Ljk3MmM1LjY4OS02Ni43NDgsNDMuNjE3LTExNC43MjksOTIuOTg5LTEzNy45ODJjMjcuMzEzLTEyLjg2NCw1OC45NjctMTcuNDI5LDEwMS45ODctMTUuOTk4IEMzMDkuNDcyLDI3Ni40NzksMzI4LjgxNCwxMzguODM1LDM0Ni45NTcsMHogTTU3NS45MjgsNTc0LjkyOGMwLDMwLjExNi01LjU1NSw3My44MjUsMyw5Ni45ODggYzE0Ljg2Niw0MC4yNTEsNjYuMzUzLDMxLjk5NiwxMjIuOTg0LDMxLjk5NmM2Ny4yOCwwLDEyNi43MzQsMCwxOTQuOTc2LDBjMjkuNTQ4LDAsNzMuMjQ3LDUuMDMsOTQuOTg4LTMgYzQwLjc0OC0xNS4wNDksMzEuOTk2LTY2LjczMywzMS45OTYtMTIyLjk4NGMwLTMzLjYyNyw1LjcyNi03My4zNjQtMi45OTktOTYuOTg4Yy01LjQ0NS0xNC43NDMtMTguODIyLTI0Ljk3OS0yOC45OTctMjguOTk3IGMtMjIuNzM1LTguOTc4LTY0Ljk1Mi0zLjk5OS04OC45ODktMy45OTljLTYyLjE2NCwwLTEyOC4wOTYsMC0xODcuOTc2LDBjLTI5LjQ2MiwwLTY2LjgzMy0yLjg4OC05NC45ODgsMSBDNTY3LjE4NSw0NTYuMjI2LDU3NS45MjgsNTEyLjIwMiw1NzUuOTI4LDU3NC45Mjh6IE0yNTUuOTY4LDY0NC45MTljMCwxNy43MDctMi43Nyw0NC4yMjQsNiw1Mi45OTNjNy43NTYsNy43NTYsMjMuNjQsNiw0MS45OTUsNiBjMTQuODM3LDAsMzIuMjcsMCw0OC45OTQsMGMyMy4wNzIsMCw3OS4zMDgsNS4zNzYsODkuOTg4LTYuOTk5YzguMTA4LTkuMzk2LDUtMzUuMjQxLDUtNTcuOTkzYzAtMTguMTE2LDIuNzI5LTQ4LjI2NS02LTU2Ljk5MyBjLTEyLjM2Ni0xMi4zNjYtNjAuMjk0LTYtODAuOTktNmMtMjguOTYzLDAtNjMuMjY4LTQuNjE3LTg3Ljk4OSwxQzI0OS42MDksNTgyLjIzNSwyNTUuOTY4LDYxMS44NjYsMjU1Ljk2OCw2NDQuOTE5eiAgTTExNTEuODU1LDY0NC45MTljMCwxNy43MDctMi43Nyw0NC4yMjQsNiw1Mi45OTNjNy43NTYsNy43NTYsMjMuNjQxLDYsNDEuOTk0LDZjMTQuODM3LDAsMzIuMjcsMCw0OC45OTQsMCBjMjMuMDcyLDAsNzkuMzA5LDUuMzc2LDg5Ljk4OC02Ljk5OWM4LjEwOS05LjM5Niw1LTM1LjI0MSw1LTU3Ljk5M2MwLTE4LjExNiwyLjcyOS00OC4yNjUtNi01Ni45OTMgYy0xMi4zNjUtMTIuMzY2LTYwLjI5NC02LTgwLjk4OS02Yy0yOC45NjMsMC02My4yNjgtNC42MTctODcuOTg5LDFDMTE0NS40OTcsNTgyLjIzNSwxMTUxLjg1NSw2MTEuODY2LDExNTEuODU1LDY0NC45MTl6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xNDA5LjgyNCwyYzE5LjUzMS0yLjE5Miw1Ny45My0zLjQ1OSw3NC45OSwxIGMyNC44NDgsNi40OTUsNDUuODUyLDI4LjAyOCw1MS45OTMsNTEuOTk0YzYuNjU1LDI1Ljk2OCwyLjAwMSw3NS44MDcsMiwxMDYuOTg3Yy0wLjAwMSwzNS44NTEsNC42MTYsOTMuNzc2LTUuOTk5LDExNi45ODUgYy05LjA1OCwxOS44MDItMjguODQ4LDM2LjUxMi00OS45OTQsNDEuOTk1Yy0yMC4yNjYsNS4yNTQtNjAuNzk2LDUuMDMxLTgxLjk5LDBjLTI1LjA1Ni01Ljk0OC00NC4xODQtMjQuNjQ5LTUxLjk5Mi00Ny45OTQgYy04LjU5OC0yNS42OTgtNC03NC43NS00LTEwNy45ODZjMC0zOC4yODUtNS41MzEtODEuMTc2LDItMTA5Ljk4NkMxMzU0LjA3MiwyNy4yOSwxMzc4LjYxLDUuNTA0LDE0MDkuODI0LDJ6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik05Ni45ODgsODYzLjg5MmM0NjguOTM1LDAsOTM3LjkwNCwwLDE0MDYuODI1LDAgYzAsNTMuMzI3LDAsMTA2LjY1MywwLDE1OS45OGMtNDY5LjI4OSwwLTkzOC41MjcsMC0xNDA3LjgyNCwwYzAtNTIuMzI3LDAtMTA0LjY1NCwwLTE1Ni45OCBDOTUuOTAyLDg2NS40NzMsOTUuODIzLDg2NC4wNjEsOTYuOTg4LDg2My44OTJ6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0xNTk5LjgsMTE1MS44NTVjMCwyMS4zMzEsMCw0Mi42NjIsMCw2My45OTIgYy01MzMuMjg5LDAtMTA2Ni40NzksMC0xNTk5LjgsMGMwLTIxLjMzLDAtNDIuNjYxLDAtNjMuOTkyYzM5Ljk5NSwwLDc5Ljk5LDAsMTE5Ljk4NSwwYy0xMC41MzEtMTQuODAxLTI0LjQ4Ni0zNC44MzgtMjMuOTk3LTYzLjk5MSBjMTA2LjMxOCwwLjY2NiwyMTUuMzA4LTEuMzMzLDMxOS45NiwwLjk5OWMwLjAzOSwyMS40NzctNy44NDIsMzguNjI1LTE1Ljk5OCw1MC45OTRjLTMuMTQ4LDQuNzczLTguMjg5LDkuNDk4LTYuOTk5LDExLjk5OCBjMjcxLjY0NSwwLDU0My4yNTcsMCw4MTQuODk4LDBjLTEwLjUzMS0xNC44MDEtMjQuNDg2LTM0LjgzOC0yMy45OTgtNjMuOTkxYzEwNi4zMTgsMC42NjYsMjE1LjMwOS0xLjMzMywzMTkuOTYxLDAuOTk5IGMwLjAzOSwyMS40NzctNy44NDIsMzguNjI1LTE1Ljk5OCw1MC45OTRjLTMuMTQ4LDQuNzczLTguMjg5LDkuNDk4LTcsMTEuOTk4QzE1MjAuNDc3LDExNTEuODU1LDE1NjAuMTM5LDExNTEuODU1LDE1OTkuOCwxMTUxLjg1NXogIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik0yMjQuOTcyLDEyNDcuODQ0YzIwLjk5OCwwLDQxLjk5NSwwLDYyLjk5MiwwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTctMjUuMDE3LDQwLjk5NS0zOS45OTVjMTMuMDE2LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk0LTM4Ljk5NSBjMjguMTg1LTkuMTY2LDQ5Ljg4OCwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNDksMTMuMzc0LTI2LjYzMSwzMC43MzYtMzcuOTk1LDQxLjk5NSBjLTQwLjg0MSw0MC40NjEtODAuODA1LDc5LjYzNC0xMTkuOTg1LDExOS45ODVjLTQxLjc4My0zOC4yNDQtNzkuOS03OS4yMzYtMTIxLjk4NC0xMjAuOTg1IGMtMTEuNjA4LTExLjUxNi0zNC43NTEtMjcuNTYzLTM4Ljk5NS00MS45OTVjLTcuNDA2LTI1LjE4LDE0Ljg1My00OS43Nyw0MS45OTQtNDAuOTk0YzE3LjE5Nyw1LjU2LDMwLjA2NSwyNS4wNjQsNDMuOTk1LDM4Ljk5NSBjMTQuNDkyLDE0LjQ5MiwyOS4yMTEsMjguNTY2LDQxLjk5NCw0MC45OTVDMjI0LjYzOSwxMzg3LjQ5MiwyMjIuNjM5LDEzMTUuNTA0LDIyNC45NzIsMTI0Ny44NDR6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNENzFGMzAiIGQ9Ik03NjguOTA0LDEyNDcuODQ0YzIwLjk5OCwwLDQxLjk5NSwwLDYyLjk5MywwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTYtMjUuMDE3LDQwLjk5NC0zOS45OTVjMTMuMDE2LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk0LTM4Ljk5NSBjMjguMTg2LTkuMTY2LDQ5Ljg4OSwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNDksMTMuMzc0LTI2LjYzLDMwLjczNi0zNy45OTUsNDEuOTk1Yy00MC44NDEsNDAuNDYxLTgwLjgwNSw3OS42MzQtMTE5Ljk4NCwxMTkuOTg1IGMtNDEuNzg0LTM4LjI0NC03OS45MDEtNzkuMjM2LTEyMS45ODUtMTIwLjk4NWMtMTEuNjA4LTExLjUxNi0zNC43NS0yNy41NjMtMzguOTk1LTQxLjk5NWMtNy40MDYtMjUuMTgsMTQuODUzLTQ5Ljc3LDQxLjk5NS00MC45OTQgYzE3LjE5Nyw1LjU2LDMwLjA2NSwyNS4wNjUsNDMuOTk1LDM4Ljk5NWMxNC40OTMsMTQuNDkyLDI5LjIxMSwyOC41NjYsNDEuOTk1LDQwLjk5NSBDNzY4LjU3LDEzODcuNDkyLDc2Ni41NzEsMTMxNS41MDQsNzY4LjkwNCwxMjQ3Ljg0NHoiPjwvcGF0aD48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0Q3MUYzMCIgZD0iTTEzMTIuODM2LDEyNDcuODQ0YzIwLjk5NywwLDQxLjk5NCwwLDYyLjk5MiwwIGMwLDY5LjMyNSwwLDEzOC42NDksMCwyMDcuOTc1YzEyLjkyNy05LjY1NSwyNi4wMTYtMjUuMDE3LDQwLjk5NC0zOS45OTVjMTMuMDE3LTEzLjAxNywyOC41NDEtMzMuOTcsNDMuOTk1LTM4Ljk5NSBjMjguMTg1LTkuMTY2LDQ5Ljg4OCwxNy43MjQsNDEuOTk1LDQxLjk5NGMtNC4zNSwxMy4zNzQtMjYuNjMxLDMwLjczNi0zNy45OTYsNDEuOTk1Yy00MC44NCw0MC40NjItODAuODA1LDc5LjYzNC0xMTkuOTg0LDExOS45ODUgYy00MS43ODMtMzguMjQ0LTc5LjktNzkuMjM2LTEyMS45ODQtMTIwLjk4NWMtMTEuNjA5LTExLjUxNi0zNC43NTItMjcuNTYzLTM4Ljk5Ni00MS45OTVjLTcuNDA1LTI1LjE4LDE0Ljg1NC00OS43Nyw0MS45OTUtNDAuOTk0IGMxNy4xOTcsNS41NiwzMC4wNjUsMjUuMDY1LDQzLjk5NSwzOC45OTVjMTQuNDkyLDE0LjQ5MiwyOS4yMTEsMjguNTY2LDQxLjk5NCw0MC45OTUgQzEzMTIuNTAyLDEzODcuNDkyLDEzMTAuNTAzLDEzMTUuNTA0LDEzMTIuODM2LDEyNDcuODQ0eiI+PC9wYXRoPjwvc3ZnPg==", head: "Integrates With Your Scales", p: "cieTrade offers seamless scale integration with truck, floor, and forklift scales with optional stored tare weights to save time and improve accuracy." },
            { img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGltYWdlIGlkPSJuZXdfaWNvbiIgZGF0YS1uYW1lPSJuZXcgaWNvbiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVBBQUFBRHdDQVlBQUFBK1ZlbVNBQUFUaFVsRVFWUjRuTzNkZTdCZFpYM0c4ZS9KUFVBU0VrSzRDSVQ3SlFoRk5Jb2dpS0JjUmVWU2JwV2JHZ3dYb1lWZ0Fna0pDWVFRVUt3Vld4eHJiMWFzNCtnd3R2WWlWY2VSS2VPRkttQXBqbEtMMWxKU1N3cFdpQUpKLzNnUGtJU2NzL2RhKy9lczlhNjFuczhNdzBuT09iKzljczUrOWw3clhiLzNmY0hNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpLeENReHYvNFdFT3F1czRUT01FNEFYZ25yb1B4T0xNNGFHWFBoNVg0M0dZMWc3QXpjTWZmeFZZWCtPeG1NaVl1Zy9BWks0QTlnZGVBNXhUODdHWWlBUGNUcE9BK2J6OCsxMEpUS3p2Y0V6RkFXNm55NEVadlB6N25RMWNWdC9obUlvRDNENHpnT3VHUDk1NGpHTXhzRzMxaDJOS0RuRDdMQWFtRDMrODhWMkdHY0NpNmcvSGxCemdkdG1kMFUrVnJ3UjJyZVpRckFvT2NMdmN4T2lEVlpPQUZSVWRpMVhBQVc2UFE0RnorL2k2ODhFZE8yM2hBTGZIcld6V1dUZUNNY0JxOGJGWVJSemdkamdCT0xiQTE1OElIQ002RnF1UUE5eDhZMGp2dmtXdHByOTNiTXVZQTl4OEYxRHVtdloxd0ZuQngySVZjNENiYlRLd2ZJRHZYd2xNQ0RvV3E0RUQzR3lEM3RmZEU3Z2s2RmlzQmc1d2M4MGtwck5xQ1RBMW9JN1Z3QUZ1cmlYQXRJQTZNNEdGQVhXc0JnNXdNKzFGN0tudjd3S3ZDcXhuRlhHQW02bmZ3YWNYK3F5M0ZZTU5obGxOSE9EbW1RdWMyZWZYamkxUTkwSmdUdUdqc1ZvNXdNM1RiOHRrVVdOeGkyWGpPTUROOG5iZ2FISDlvNFQxTFpnRDNCeFZ2VU9xM3VGTndBRnVqb3VvNWhyMURjRHBGVHlPQlhDQW02SHFVZUpWd1BnS0g4OUtjb0NiNFNwZzV3b2ZiMi9nNGdvZnowcHlnUE0zQzdpbWhzZGRDa3lwNFhHdEFBYzRmMHVwcDFkNUZyQ2doc2UxQWh6Z3ZPMUR2YWV5VndNNzFmajQxb01EbkxlNkI1TzJCcGJWK1BqV2d3T2NyOE9BMCtvK0NPQzlwRTNTTEVNT2NMNCtSQjRORmVONGVadFN5NHdEbktkM0FVZlVmUkFiT1pXOGpzZUdPY0Q1R1VlNjlzMU5tWlV2VGN3QnpzLzd5UE9hODNEU083Rmx4QUhPeXpia1BlcTdpazIzTExXYU9jQjV1UnJZc2U2REdNVitwRE1FeTRRRG5JOGRhVWJuMHpMUy9XSExnQU9jajJXa1UramM3VWc2VTdBTU9NQjUySjltblpvdUFIYW8reURNQWM2RlluRG9IMG1OSUVQQVBjRzFwNUFtV1ZqTkhPRDZIVUZxM0lpMGdVMTNiZmdnc0w1RWpkSE1JMDIyc0JvNXdQVWFJclZNUnZzY2NQOUdmLzQrY0ZmQkdyM2FPTWZqRnN2YU9jRDFPbzAwYVNIU2M2UnRWemEzQkZoWHNGYXZkK0hUaVQ5K0s4QUJyczk0TkMyVG53QWUzY0xmUHdaOHZHQ3RYdS9DUTdqRnNsWU9jSDB1SnY0YThwZkFqYU44ZmlXd052Z3hqd1JPQ2E1cGZYS0E2ekVWelNqdWg0RTFvM3grTFpycjFsdHdpMlV0SE9CNkxDQ3RPUlhwQ2VEMlByN3VEdExwZEtRNXBMMlZyR0lPY1BWMlJ0UEpkQlBwRkxxWGRjRDFnc2RmVGxxLzJpcmtBRmRQOFVSL2xEUjQxYS9Qa0c0dFJkcVp0TSt3VmNnQnJ0WWMwaFlwMFphUWJoLzFhejJ3VUhBY0M0SHRCWFZ0QkE1d3RWWlRiTS9lZnR4UGF0d282aXZFdDFoT1pjdjNvRTNFQWE3T20wbmJkMFpiUk8rR2k1R1VhYkhzWlQ2d1YzQk5HNEVEWEkwaDREWkIzWHRJa3hiS0t0TmkyY3NFMG9DYVZjQUJyc2Fad056Z21odUl1WTR0MDJMWnkxbkUvM3R0Q3h4Z3ZRbWtEcWhvbndXK0YxQ25USXRsTDBOVXN4bDU1em5BZXBjUWYwMzRHMkx2NVNwYUxOOENuQlJjMHpiakFHdE5Rek1xZXlmd2I0SDFsQzJXZm80SitZZXJ0UkNZR1Z6emFUU241SW9XeTRPQUM0SnIya1ljWUoxZDBYUW05WnF3VUpheXhYS3lvSzdoQUNzcG5yaFBrQUtzb21peDNCVzRJcmltRFhPQU5WU25qc3VCWHducXZralZZcmtJMkU1UXQvTWNZSTNWeFA5c2Z3ejhjWEROTFZHMFdHNExMQTZ1YVRqQUNzY0NKd3JxTHFiWWhJVkJLRm9zTHdWMkQ2N1plUTV3TE5VYVVkOEZQaStvT3hKRmkrVkUzR0laemdHT2RTNXdxS0R1UXNwUFdDaEwwV0o1RHBxZlQyYzV3SEZVN3pEL0FIeE5VTGNYUll2bEdOeGlHY29Cam5NWjhkZDQ2OWwwaDRXcUtWb3Mzd29jRjF5enN4emdHTlBSakxKK2x2ajdza1dvV2l3Vm8vU2Q1Qjlpakd1QkdjRTFmNDJtTTZvb1JZdmxJY0R2Qk5mc0pBZDRjTE9CRHdqcTNnbjhSRkMzS0ZXTDVZM0FKRUhkVG5HQUI2ZDRJajVOWHJkY0ZDMldzMG5qQmpZQUIzZ3dxbFBCMjRCZkNPcVdwV3F4dkk0MGZtQWxPY0NEdVpYNG4rSGp3RWVDYTBaUXRGak9JSVhZU25LQXl6c09lSnVnN2dxMEV4WUdvV2l4dkJ6WUxiaG1aempBNVl4QjB6TDVJNnFac0ZDV29zVnlFdWxGeTBwd2dNczVEL2d0UWQzcmdPY0ZkU01wV2l6UEF3NE9ydGtKRG5CeHFuZU1id05mRU5TTnBtcXg5RWJoSlRqQXhWMkI1cHB0a0IwV3FxWm9zVHllTkJYVENuQ0FpNWxCNnJxSzluZkExd1YxVlpRdGxrT0N1cTNsQUJlemhMUzZSS1QxYUY0VTFCUXRscThGemc2dTJXb09jUC8ySUswcUVlMHp3QU9DdW1xcUZzdVZwS21aMWdjSHVIK0tKMVl1RXhiS1VyUlk3a0hhemNMNjRBRDNSM1ZxOTRmRW40WldTZFZpdVppMHE0WDE0QUQzNTFiaUIxZWVRak1RVkRWRmkrVk02bDNJb0RFYzRONU9BbzRSMUwyVnZDWXNERUxSWW5rbHNFdHd6ZFp4Z0VjM0ZzMGFUbzhEdnkrb1d4ZEZpK1ZrMGtMMk5nb0hlSFFYQUs4VzFMMEJlR2JBR2h1Qy94dVVvc1h5QXVEQTRKcXQ0Z0NQYkNzMDd3Q1BBSDhpcUZzM1JZdWw2Z3lvTlJ6Z2thbXV3WmFRLzRTRnNoUXRsaWNEUndmWGJBMEhlTXRVbzZEZkFyNG9xSnVMdFdqMkxuYUw1UWdjNEMyN0hwZ3FxRnZIRGd0Vit6ang5N1pmRDV3UlhMTVZIT0JYMmd0Tko5Q1hnVzhJNnVaRzFXSzVDaGd2cU50b0R2QXJLWjRvVFoyd1VKYWl4WEl2WUg1d3pjWnpnRGVsT2xYN05QQ1FvRzZ1MXBPYU82SXRRWE5wMDFnTzhLWnVJMzZ3WkIyd0xMaG1FOXhEZkl2bExHQkJjTTFHYzRCZjlnN2dLRUhkcGs5WUdJU2l4ZkpxWUtmZ21vM2xBQ2ZqU05lKzBaNUNjMXVsS2I1UHVoNk9wR3F3YVNRSE9Ma0ltQ09vZXd2d3BLQnVrMXhQZkl2bFJjQUJ3VFVieVFHR3JkRzhvdjhjK0FOQjNhWlJ0RmlxenBnYXh3R0dxOUJjVTkzQTRCTVcya0xSWXZsTzRFM0JOUnVuNndHZUJWd2pxUHV2d0o4SjZqYVZxc1ZTc2RCQ28zUTl3TXVBS1lLNmkybnZoSVd5RkMyV2J3Uk9EYTdaS0YwTzhMN0F4WUs2OXdGM0MrbzJuYkxGY3B5Z2JpTjBPY0NxWDN3WEppeVVwV2l4M0JlWUYxeXpNYm9hNE1QUm5IcjlEZkJOUWQyMlVMVllMZ08yRWRUTlhsY0RyQmo4ZUlGdVRWZ29TOUZpdVFPcFE2dHp1aGpnMDRBakJIVS9EZnhBVUxlTkZDMldDMGhCN3BTdUJYZ2NtcldZMXdGTEJYWGJTdEZpdVEwZG5EVFN0UURQQS9ZVDFMMEQrSm1nYnBzcFdpem5rUWExT3FOTEFaNkM1aFY2TFc3cks4TXRsZ0c2Rk9DcjBWd2pyY1lURnNwU3RGaWVTbXJ3NklTdUJIaEhOQlBCL3dOUFdCaUVvc1Z5aUhTWG9STzZFdURscEZsSDBXNEFuaFhVN1JKRmkrV2JTSk1kV3E4TEFUNEFlSStnN3NONHdrSUV0MWdPb0FzQlZ2MGlGNU9hTjJ4d2loYkxBMGdULzF1dDdRRStFczJwMUQvaENRdVJWQzJXeTBsTDhMUldtd09zSE14UTdFcmZkWW9XeTUxSUN6YTBWcHNEZkFad21LRHVsNEI3QlhWTjAySjVEV25oaGxacWE0REhvMm1aOUlRRkxVV0w1VlRTZ3ZDdDFOWUF6d2YyRnRUOWM5TG9zK2tvV2l6bms3Wm1hWjAyQm5ncW10c1N6NUx1KzVxV29zVlNkVVpXdXpZRytJUEE5b0s2SDhNVEZxcWlhTEg4YmRMZVY2M1N0Z0R2RFB5ZW9PNWEwaUx0VmcxVmkrWHE0SnExYTF1QWIwUnozMjhWOGU4SU5qcEZpK1hSd01uQk5XdlZwZ0FmQ0Z3Z3FQc3owdW16VlV2Vllya2FHQ3VvVzRzMkJWajFpMWxHL0tpbzlVZlJZcWw2b2E5Rld3TDhGalNuUnY4Qy9JV2dydlZIMldJNVdWQzNjbTBJc0hKdzRqbzhZYUZ1aWhiTFhZQXJnMnZXb2cwQlBodVlLNmg3TDZsdDB1cW5hTEZjQk13TXJsbTVwZ2Q0SW5DVHFMWW5MT1JEMFdJNWpUUWx0TkdhSHVCTGdEMEZkZThtVFJtMGZDaGFMQzhCOWdpdVdha21CM2dhbWliMTUybkJLM01MS1Zvc2xXZHdsV2h5Z0s4RnRoUFU5WVNGZkNsYUxNOEJYaHRjc3pKTkRmQ3VhRVlSbjZXRHEvczNpRnNzTjlQVUFOOElUQkxVL1Nqd2MwRmRpNk5vc1R3V09ENjRaaVdhR09DRGdmTUVkWitrd2EvRUhhSnFzYnlWQnVhaGNRZU03Z2Q5TS9DL2dyb1dUOUZpcVhwamtHcGFnTitLNWxUbnA4U1BjSnFPcXNWeUJacExNNWttQlhnTXVsTmNUMWhvSGtXTDVXN0E1Y0UxcFpvVTRIT0JRd1YxZjRBbkxEU1Zvc1h5T21CR2NFMlpwZ1I0RXJvYjdvdUlmeEpZTlJRdGx0TkpJVzZFcGdUNE1tQzJvTzQzZ1M4TDZscDFGQzJXcXVkYnVDWUVlRHFhMXNZTmVNSkNHeWhhTENlUkJyU3kxNFFBTHlhRk9OcmR3SDJDdWxZOVJZdmx1NEZEZ211R3l6M0FzOUdNQ2o1UGc2NXpSakFVL0YrVEtWb3NsWGM5d3VRZTRKV2tHU1BSL2hSNFJGRFg2cU5vc1R5TzFIdVFyWndEZkNocHBraTBaL0FPQzIya1hNVXkyNXhrZTJEb2ZuQWZCZjVUVU5mcXAyaXhWTDJSaE1nMXdNZWpPWFg1SHhwd1hXT2xxVm9zYjBKektUZXdIQU04QnQzRzNEY0RUNGxxV3g0VUxaYTdBNWNHMXd5Ulk0RFBKODBNaWFhNFgyaDVVclJZTGdhMkRhNDVzTndDUEJuZERmU2x3SzlGdFMwdmloYkw3VWh0dDFuSkxjQlhrSmJMaWZZZzhKZUN1cFl2Ull1bDZ2bFpXazRCM282MFVKM0N0WGpDUXRjb0xwa21rN1pseVVaT0FWNUNXaW8yMmplQXZ4WFV0ZndwV2l6UEJ3NEtybGxhTGdIZUU4MG9ueWNzZEp1aXhYSXNHVzMybmt1QVZ3SVRCSFcvQ0h4TFVEZFhFNEVUZ0R1QkIwaHJmRzBZL3Y4RHczOS9BcG5lMHhSUnRGaWVSTm9SczNhYk5MRS9YTStad1Z4U3lLSWI2cDhIWGczOE1MaHVqc1lCN3lHMWlPN1V4OWV2SVRXMDNBSDhSbmRZMlRpUCtGVlh2Z084Z2ZRQ1dhazVQUFRTeHptOEE2OUdNeHZtVTNRanZQc0I5d09mb0wvd0Fzd0NQa3g2RXU0dk9xNmNLRm9zNXdKbkJ0Y3NyTzRBbjR6bVZPUVpNaHN0RkpsTDJvU3RiT1BMd2NQZi8vcXdJOHFUcXNWU2Rlblh0em9EUEJaZFgvSkhnTWRGdFhPeFA2bGxjTkFGMktZRFg2SDk3OFNLRnN1OWdQbkJOUXVwTThBWEFnY0s2djRDWFM5MUxzWURueVB1dHR1MDRYcmpnK3JsU3RGaXVRU1lHbHl6YjNVRmVDdDBMWk1yZ2FkRnRYUHhBZUw3eFE5R3MyRmNUaFF0bHR0VDQ2M0t1a2FoRjZOWkp2YmZTYWVDYmU1NW5rUzZMVEpMVUhzTmFYSHpOdi84WnBOV1k0bmNnZUVaWUI4cW1tZGU5eWowOW1nR0ZDRDF2N2I1eVFkd0NwcndNbHozSGFMYXVWQzBXRzVGVFlPbWRRUjRLWnByaGdlQXV3UjFjM05Tdyt2blFORmllU0V3SjdobVQxVUhlRy9nL2FMYVhkbGhRYjJiZkdOM3F5OUEwV0k1amhwYUxLc084Q28wSTUxZkEvNWVVRGRIdXpXOGZpNFVMWmFuQUVjRzF4eFZsUUUrRERoZFVIY0R1bW1JT1ZMTTJLcXlmaTZVRzRWWHRzNTJsUUZXL2NPK0FIeGJVRGRYNmpXOXVyUm1tS0xGOGpEZ3RPQ2FJNm9xd085RWMyclJoaDBXaXZwcHcrdm5STlZpcWJwVWZJVXFBanlPOUE5UytDVHdJMUh0WE4zZjhQcTVVYlJZN2dQTUM2NjVSVlVFK0wzQUFZSzZ2NkloTzhnRlU2OHUwc1hWU3hRdGxrdUJLY0UxWDBFZDRLM1JiV055Ty9CZm90bzUrMnRTeDVUQ0d1QkxvdG81VTdSWTdnQXNDSzc1Q3VvQUx3QjJGTlQ5YitCRGdycE5zQTdkTEs3YmFIOG4yMGdVcTFoZWplYjUveEpsZ0hjZy9RTVV1akJoWVRRZkl5MlZHK2xCMHI1UlhhVm9zZHdhV0JaY2N4UEtBTitBNWhyZ0o4QWZDZW8yeVhQQVdjUzFBNjRsclM3eFhGQzlwbEswV0w2UHRHcUtoQ3JBKzVFT1hHRUozVmpIcVpkSFNKdkFQVGxnblNlSDYzUmgrYUZlVkMyV3Fyc3dzZ0N2SWgxNHRPOEJmeVdvMjFUZkFRNm4vT24wZzhBUnczVXNVYlJZbmtyNlBZVlRCUGdJMGdFcmRHWENRaEUvSkUxQWVELzlMeU8waGpRK01aZjBUbTR2VzBjNnk0c21XU1VtZWtML0VIQXZtbGVicjZMWk03aE5KcElXQ1h3WDhFYlM1UFZwcFBiSXg0RDdnTHVCcjlQZDBlWitqQ0UxdEJ3U1hQZFUwczkvSUJ0UDZJOE84R21rM3VSb0cwZ3JKMzVYVU50c1M5NUdXdXd2MGlPa2JWbWVINlNJYWtXTzhlZ3UxaitQdzJ2VnVvZjRBTzlQNmt3TUV4bmdlY0MrZ2ZWZTlCeHBEUzJ6cWkwa2ZzeGxHZW4rY0lpb0FFOUJkOFA2azhDUFJiWE5ScU5vc2R3SnVDcXFXRlNBcjBHejBOci8wYzBKQzVZUFJZdGxXRjRpQWh6NmlyS1oyNEVuUkxYTit2RVlhUk80U0ZOSXM1VUdGaEhnRlFTZTAyOWtEZDJkc0dCNXVabjRGc3VMU1lzOERtVFFBTThoTGFlcGNCUHdTMUZ0c3lJVUxaWWhkMjBHRGZBdGFGb21IeVZ0bDJtV0MwV0w1ZW1rUFlaTEd5VEFSNUdXMFZTNEhrOVlzTHdvV2l5SEdMREZzbXlBaDBpVHZ4WCtHVTlZc0R6ZFJmd3Fsa2NCYnkvN3pXVURmQWE2VGFFWGtWb256WEt6SGpicVk0eXptclJmZG1GbHJsOG5JSnpmU0h6N21sbnVYaHdNL2xUUmJ5enpEanlmdERPNW1jVlpUdHJsc0pDaUFaNktaanNLczY1N0ZTVTJXQzhhNEVYQXpLSVBZbVo5S1p5dklnSGVoUkt2RUdiV3Q2a1V2RlZWSk1BcktIR09ibWFGWEFMczJlOFg5eHZnZzREelN4Mk9tUlV4Z1FKdG0vMEcrQlpLM3FjeXM4TE9BbDdYenhmMkUrQmpnSk1HT2h3eksyS0lQcmZQNlJYZ2dYczF6YXlVWTRBVGUzMVJyd0NmVFZwejJNeXF0NW9lR1IzdGt4TkpFNW5OckI0OUI0OUhDL0Nsd082UlIyTm1oYTBBSm8zMHlaRUN2QzJhN1NYTXJKaGRnU3RHK3VSSUFiNFdtQ0U1SERNcmFzUThiaW5BdXpGSzRzMnNjdHN5d3VZR1d3cndqWXh5em0xbXRiaU10Rm5kSmpZUDhDSEF1eXM1SERNcllpSmJhTEhjUE1BOTd6dVpXVzNPQVY2ejhWOXN2cVRPaWFUOVpNZVNwamFOSTYwaVB4N1lodFJvdlRYcDFXQXIwcW4yNU9HUEp3NS9ic0x3MTQ0Zi90NXh3N1hHRHRjZVF6cW5Id0tteC83N3pGcHRET2xOOXJpNkQ4VE16TXpNek16TXpNek16TXpNek16TXpNek16TXhzRVA4UGlGY1Z5OVR3UmZjQUFBQUFTVVZPUks1Q1lJST0iPjwvaW1hZ2U+PC9zdmc+", head: "Helps Avoid Oversights", p: "cieTrade’s built-in workflow tools for agriculture trading, notifications and alerts help you track critical tasks so that nothing gets overlooked by your back office." },
            { img: i5, head: "Provides Critical Business Insights", p: "cieTrade provides valuable business intelligence with real-time gross profit reports by customer, supplier, product, tonnage trend and more, helping you make better decisions." },
            { img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0MHB4IiBoZWlnaHQ9IjI0MHB4IiB2aWV3Qm94PSIxOTAuNTIyIDE5NC40NjggMjQwIDI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI0Q2MEYzMCIgZD0iTTE5MC44NDIsMzYzLjM0OWMwLjY2OC0yLjcyOCwxLjM2NC01LjQzOSwxLjk5MS04LjE2N2MyLjYzMy0xMS4yNzgsNy45MjUtMjEuMTU1LDE2LjAzNy0yOS4zNzIgYzE0Ljg0OC0xNS4wMjIsMjkuNjgxLTMwLjA3LDQ0LjgyMy00NC43OTdjMjcuMDIyLTI2LjI3Myw3MS41NjQtMjMuMTA2LDk0LjQ5Nyw2LjQwMWMyLjIwNSwyLjgzMywyLjY3Myw0LjYzNy0wLjI5NCw3LjM5MSBjLTYuMzM2LDUuODY3LTEyLjI2OCwxMi4xNzQtMTguNjU2LDE4LjU5Yy0xLjAyOS0xLjY0NS0xLjg0NC0yLjk4MS0yLjY5OS00LjMwNGMtMTEuNjk0LTE4LjAxNS0zNi41MzgtMjEuMTAyLTUxLjkyLTYuMTM0IGMtMTQuNzgsMTQuMzgxLTI5LjM2MSwyOC45ODctNDMuNzUzLDQzLjc1NGMtMTIuOTksMTMuMzM4LTEyLjYyOSwzNC4xODYsMC40MjcsNDcuMTc0YzEzLjA0MywxMi45NzgsMzMuNzMxLDEzLjA5OSw0Ny4yMTUsMC4yMTYgYzQuMjEtNC4wMjIsNy42MzItMTAuMTk3LDEyLjU2My0xMS43NDljNC43MzEtMS40ODEsMTAuOTE4LDEuODMyLDE2LjQ5MiwyLjg2MWMzLjI2MSwwLjYwMiw2LjU3NiwwLjk4OCw5Ljg4OSwxLjE3NiBjMy4zMTQsMC4yLDYuNjQyLDAuMDQxLDEwLjgxMiwwLjA0MWMtMS4xMSwxLjQ1NS0xLjczNywyLjQ4NC0yLjU1MiwzLjMxNGMtOC42ODgsOC43MjYtMTcuMzM0LDE3LjQ3OS0yNi4xMTUsMjYuMDk5IGMtOS42NjIsOS40NzUtMjEuMjIxLDE1LjI0OS0zNC42MjUsMTcuMzQ3Yy0xLjEyMywwLjE3NC0yLjE3OSwwLjY2OC0zLjI3NCwxLjAxNmMtNC42NjQsMC05LjMxNSwwLTEzLjk3OSwwIGMtMC44OTYtMC4zNDgtMS43NjQtMC44NjktMi43LTEuMDE2Yy0yNi41MTQtNC41MDQtNDYuMzMzLTIzLjEyLTUyLjQ0LTQ5LjI4NmMtMC41MjEtMi4yMi0xLjE3Ni00LjM5Ni0xLjc2NC02LjU4OSBDMTkwLjg0MiwzNzIuNjYzLDE5MC44NDIsMzY3Ljk5OSwxOTAuODQyLDM2My4zNDl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0Q2MEYzMCIgZD0iTTI5NS40MDIsMjQxLjA1NGM5LjM4MS05LjgwOSwxOS4xMS0yMS44MjIsMzAuNjcxLTMxLjcxMmMyNS40NzItMjEuODExLDY0LjE2LTE4LjY4Myw4Ny4wMTMsNS45MzQgYzIzLjAzOSwyNC44MTcsMjIuODkyLDYzLjQ2NS0wLjY1NSw4Ny42OTRjLTE0LjgzNCwxNS4yNzYtMjkuODY5LDMwLjM1LTQ1LjE3LDQ1LjE1OGMtMjYuODYyLDI1Ljk5My03MS4zNzgsMjIuNzMxLTk0LjE2My02LjQ5NiBjLTIuNDQ2LTMuMTI2LTIuNDk5LTQuOTg0LDAuNDgxLTcuNzYzYzYuMzA4LTUuODY4LDEyLjI0MS0xMi4xNDgsMTguNTM2LTE4LjQ3YzYuNjAyLDEyLjIyOSwxNi4yNjQsMTkuMzY0LDI5LjkyMSwyMC4wMDYgYzkuNTgyLDAuNDU1LDE3Ljk4OC0yLjksMjQuODE2LTkuNjc2YzE0LjQwOC0xNC4yODYsMjguODE0LTI4LjU4NSw0My4wNDctNDMuMDQ1YzEzLjMxLTEzLjUyNCwxMy4yNzEtMzQuMzczLDAuMTYtNDcuNTQ5IGMtMTMuMDk4LTEzLjE3Ny0zMy45NTktMTMuMjU3LTQ3LjU2My0wLjEzNGMtMy43MTUsMy41ODMtNy4yMTgsNy4zNzctMTEuMDEzLDEwLjg1MmMtMS4wMjksMC45MzYtMi45MTIsMS43MTEtNC4xOTYsMS40ODMgQzMxNi4xMzEsMjQ1LjI3OCwzMDUuMDIzLDI0Mi45NzksMjk1LjQwMiwyNDEuMDU0eiI+PC9wYXRoPjwvc3ZnPg==", head: "Seamlessly Connects With Accounting", p: "Saves time and minimizes errors by synchronizing master data and transaction postings without the use of manual batch files that can easily lead to reconciliation headaches." },
        ],
        Tool: [
            { img: laptop, head: "WEB APPLICATIONS", title: "Self-Service Portal", p: "cieTrade’s self-service portal gives customers and supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.", id: "SelfServices" },
            { img: mobile, head: "MOBILE APPS", title: "ciePhoto", p: "cieTrade’s inventory scanning app helps your warehouse quickly check and edit inventory, confirm inventory availability and minimize time spent with stock and cycle counts.F", id: "Ciephoto" },
        ],
    };
    const faqs = [
        {
            question: "Does cieTrade support scale integration?",
            answer: "Yes, cieTrade offers direct integration with floor, truck, and forklift scales to pull scaled material weights directly into the system. This feature only works with scales that have an IP Address. Please contact our sales team to learn more about our scale integration feature.",
        },
        {
            question: "Does cieTrade's scrap metal software integrate with Leads-Online?",
            answer: "Yes, cieTrade’s scrap metal software supports direct integration with Leads-Online. ",
        },
        {
            question: "Can I access the same ticket at different scales?",
            answer: "Yes, each public trade, receiving, converting and shipping ticket in cieTrade can be accessed at different scales using a drop down menu that allows you to choose from various scales that you have integrated with the system.",
        },
        {
            question: "Can cieTrade be adapted for warehouse users?",
            answer: "Yes, cieTrade has a warehouse module that can be used in warehouses (either privately owned or third party) by warehouse staff. It works seamlessly with your back office to unload inbound loads, process material and pack outbound shipments.",
        },
    ];
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div>
                <div className="relative bg-cover h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/dreamstime_m_18381774-e1660177443298.jpg.webp')` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <Container className="relative py-40">
                        <h1 className="text-6xl text-white font-bold lh-xs">Scrap Metal Recycling<br />Software</h1>
                        <a href={'/Bscrap'}><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 mt-4 leading-tight">Download Brochure <i class="fa-solid fa-arrow-right ps-2"></i></button></a>
                    </Container>
                </div>
                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/scrap-metal-client-logos.png.webp" className='w-full py-4 bg-light' />
            </div>

            <div className='py-5'>
                <Container>
                    <Row>
                        <h1 className='text-4xl text-center font-bold py-4'>Benefits of cieTrade's Scrap Metal Software</h1>
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
                <h6 className='text-white text-xl py-3 lh-base lg:px-80'>Having a non-ferrous recycling plant and a scrap trading company, we found ourselves struggling to find software that could accommodate both. The flexibility of cieTrade’s platform combined with the in-depth knowledge and responsiveness of their team has truly made their product a best-in-class solution for our industry.</h6>
                <h6 className='text-white text-xl '>Joshua Lohman, Executive Vice President</h6>
                <center><img src={danco} alt="group" className='w-64 img-fluid pt-4' /></center>
            </div>

            <Container>
                <Row>
                    <h1 className='text-4xl text-center font-bold py-20'>Key Features of cieTrade's Scrap Metal Software</h1>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Public Trade Tickets</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Provides intuitive, touchscreen retail recycling tickets that make it fast and easy to process material and disburse payments by cash, check and through ATM kiosk.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports driver’s license, fingerprint scanning and digital signature capture.</li>
                            <li className='list-disc text-gray-500 text-lg'>Integrates with IP cameras to capture scaled material and customer photos.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports delayed payment on non-ferrous metals.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports integration with Leads-Online.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Pricing & Orders</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Handles both spot and contract orders.</li>
                            <li className='list-disc text-gray-500 text-lg'>Allows you to establish pricing with price lists, by location, product, weight and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports index-formula pricing, provisional and fixed pricing models for scrap trading.</li>
                            <li className='list-disc text-gray-500 text-lg'>Features “confirmed pricing workflow” to avoid settlements on unconfirmed prices.</li>
                            <li className='list-disc text-gray-500 text-lg'>Provides a central dashboard to manage and edit pricing and view pricing history from one place.</li>
                            <li className='list-disc text-gray-500 text-lg'>Shows real-time order status, budget to actual analysis, and more.</li>

                        </ul>
                    </Col><Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Inventory Control</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Supports both serial (itemized) and bulk inventory models.</li>
                            <li className='list-disc text-gray-500 text-lg'>Track material in real-time by warehouse, lot, raw/finished goods and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Allows negative inventory positions and simplifies adjustments to match physicals.</li>
                            <li className='list-disc text-gray-500 text-lg'>Custom barcode labels and scanning support improves identification and accuracy of material movements, pack and pick, stock identification and cycle counts.</li>
                            <li className='list-disc text-gray-500 text-lg'>Values material with at a landed cost, capitalizing freight, storage & processing costs.</li>
                            <a href={'/InventoryManagement'}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                        </ul>
                    </Col><Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Material Grading & Processing</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Supports ferrous and non-ferrous metal types with user definable attributes.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports production processes such as grinding, shredding, and more each with their own internal operating costs.</li>
                            <li className='list-disc text-gray-500 text-lg'>Supports separate input jobs where material is weighed.</li>
                            <li className='list-disc text-gray-500 text-lg'>Tracks production time, operators, waste and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Tracks yield/loss and capitalizes all production and internal costs into material output.</li>
                        </ul>
                    </Col><Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Domestic Brokerage & Export</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Unique buy/sell brokerage form allows you to buy and sell in different weights, units of measure, currencies, product names, and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Organizes financial and logistical data around each load, while attaching emails and documents in a single form, just like a file folder.</li>
                            <li className='list-disc text-gray-500 text-lg'>Automatically matches expense accruals with revenue on a trade-by-trade basis to instantly determine gross profit.</li>
                            <li className='list-disc text-gray-500 text-lg'>Built-in workflows manage and coordinate ocean booking requests and automate related tasks.</li>
                            <li className='list-disc text-gray-500 text-lg'>Tracks activity, cutoff dates, rollovers, notifications, container allocations, fulfillment and more.</li>
                        </ul>
                    </Col><Col lg={6} md={6} sm={12} className='py-5'>
                        <h1 className='font-bold text-2xl'>Reports & Inquiries</h1>
                        <ul className='py-3 px-4'>
                            <li className='list-disc text-gray-500 text-lg'>Shows the projected profitability of every shipment.</li>
                            <li className='list-disc text-gray-500 text-lg'>Generates all of the specialized, reports you need to manage daily activity and business performance.</li>
                            <li className='list-disc text-gray-500 text-lg'>Advanced reports include: gross profit by customer, supplier, product and more, tonnage and pricing trends, order matching and fulfillment, settlement statements and more.</li>
                            <li className='list-disc text-gray-500 text-lg'>Integrated Self-Service Portal provides your customers and supply chain partners with on-demand access and visibility to recovered material, shipments, pricing, payments and more.</li>
                            <a href={'/SelfServices'}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className='text-center py-32'>
                <h1 className='text-4xl font-bold'>Want to see a full list of features?</h1>
                <h1 className='text-4xl font-bold text-red-600 py-3'>Download our scrap metalrecycling software brochure</h1>
                <a href={'/Bscrap'}><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 mt-4 leading-tight">Download Brochure <i class="fa-solid fa-arrow-right ps-2"></i></button></a>
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

export default Scrap;