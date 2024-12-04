# Compra Dashboard Setup Guide

This repository contains the **Compra Dashboard** project which includes a front-end application built using **Vite** and a **mock server** using **json-server** to simulate API responses. Below are the steps to clone, set up, and run the project locally.

## Prerequisites

Before starting, ensure you have the following tools installed:

- **Node.js** (v14.x or higher)
- **npm** (Node Package Manager)
- **Git** (to clone the repository)

## Steps to Set Up

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/dodomyg/Compra_dashboard.git

```
### 2. Navigate to the Project Directory
Change to the project directory:
```bash
cd Compra_dashboard
```

3. Install Dependencies for the Front-End App
Run the following command to install the necessary dependencies for the front-end app:
```bash
cd Compra_dashboard
npm install
npm install json-server
```

4. Run the frontend
```bash
npm run dev
```

5. Run the mock server
```bash
npm run mock

or

npx json-server --watch .\data\db.json --port 8000
```


