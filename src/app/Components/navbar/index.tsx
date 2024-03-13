"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";




export default function Header() {
  return (
    <div>
      <ConnectButton chainStatus="icon" />
    </div>
  );
}

