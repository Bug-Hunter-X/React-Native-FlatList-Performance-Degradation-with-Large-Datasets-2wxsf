# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue in React Native's `FlatList` component when dealing with large datasets and its solution using `React.memo` and `useMemo` for optimization.

## Problem

The original code suffers from performance issues due to inefficient rendering of list items in a `FlatList`.  With a large dataset, scrolling becomes slow and laggy.

## Solution

The solution uses `React.memo` to prevent unnecessary re-renders of list items and `useMemo` to optimize expensive calculations. This significantly improves scrolling performance.

## How to Run

1. Clone the repository.
2. `npm install`
3. `npx react-native run-android` or `npx react-native run-ios`