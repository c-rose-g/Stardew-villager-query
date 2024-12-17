# Stardew Valley Search App

A full-stack React Native application built with **Expo** and **Express.js** that helps users query villagers' gift preferences in *Stardew Valley*. Users can search for villagers or gifts to maximize relationships and gifting efficiency.

---

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Future Features](#future-features)
8. [Why This Project?](#why-this-project)
9. [Screenshots](#screenshots)

---

## Overview

The Stardew Query App simplifies tracking and querying villagers' gift preferences in *Stardew Valley*. It combines a **React Native** frontend with an **Express.js** backend, providing a seamless user experience for players.

> **Note**: Currently built and tested only for **iOS** devices.

---

## Project Structure

The project is organized into two main parts:

1. **Frontend**:  
   - Built using **React Native** with **Expo** for cross-platform development.  
   - Provides a clean and intuitive UI for querying data.

2. **Backend**:  
   - Built using **Express.js** with **Sequelize** ORM.  
   - Handles data storage and retrieval via a relational database.
```
project-root/
├── frontend/       # React Native frontend (Expo)
├── backend/        # Express.js backend (Sequelize, SQL database)
└── README.md
```
---

## Features

### Current Features
- 🔍 **Search Bar**: Quickly search for a villager or gift to see their preferences.

---

## Tech Stack

- **Frontend**: React Native, Expo  
- **Backend**: Express.js, Sequelize ORM  
- **Database**: SQLite (Development), PostgreSQL (Production)  
- **Tools**: Node.js, Expo CLI  

---

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure the following tools are installed:  
- **Node v22.11.0** (npm v10.9.0)  
- **Expo CLI** (Install globally if not already):  
   ```
   npm install -g expo-cli
   ```
   
### Steps to Install

1. Clone the repository
```
git clone <repository-url>
cd stardew-query-app
```
3. Set up the backend
```
cd backend
npm install
npm start
```

5. Set up the frontend
```
cd ../frontend
npm install
npx expo start
```
6. Run the app

```
bash
On an iOS Simulator: Press i
On a physical iOS device: Install the Expo Go app, then scan the QR code.
```
---

## Usage

Search for a Villager: Enter the villager's name to view their gift preferences.
Search for a Gift: Enter a gift name to see which villagers love, like, or dislike it.

---

## Future Features

🐾 Add pet gifts for cats, dogs, and turtles.

🌱 Include seasonal gift variations, categories, and locations.

📅 Show non-giftable villagers' schedules.

🗺️ Add a map showing villagers' movement throughout the day.

📊 Include subcategories for each gift type.

---
## Why This Project?

This app showcases my skills in:

- Full-Stack Development: Built a robust React Native frontend and Express backend.
- State Management: Ensured smooth data retrieval and UI updates.
- Problem-Solving: Optimized data queries and implemented scalable backend architecture.
- UI/UX Design: Designed a clean, user-friendly interface for querying and searching.

---

## Future Features

- [ ] Add pet gifts for cats, dogs, and turtles
- [ ] Include different seasons, categories, and locations per gift
- [ ] Add subcategories for each category
- [ ] Include a nongiftable villager schedules
- [ ] add map that shows all villagers moving through the map, based on their schedule

---

## Screenshots
