import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { Box, Grid } from "@mui/material";
import axios from "axios";

function Properties({ filter, properties, walletAddress }) {
  return (
    <div style={{ padding: "2rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {properties
            .filter((property) => property.typeOfFinancialReturn === filter)
            .map((property, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <PropertyCard data={property} walletAddress={walletAddress} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Properties;
