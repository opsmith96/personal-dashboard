import { Box, Paper, Typography } from "@material-ui/core";
import { useCrypto, useStyle } from "./cryptoUtils";

const Crypto = () => {
  const classes = useStyle();
  const { btcPriceDollar } = useCrypto();

  return (
    <Box maxWidth={370} m={5}>
      <Paper elevation={3} className={classes.root}>
        <Box p={2}>
          <Typography variant="h5">BTC / USD : {btcPriceDollar}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Crypto;
