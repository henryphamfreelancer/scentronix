import { Box, Breadcrumbs, Button, Container, Grid, Link, Typography,  } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: '20px'}}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{color: 'red'}} />} aria-label="breadcrumb" sx={{ textTransform: 'uppercase', fontWeight: 'bold'}}>
            <Link underline="none" color="inherit" href="/">
              Receipts
            </Link>
            <Link
              underline="none"
              color="inherit"
              href="/"
            >
              Bread
            </Link>
            <Stack alignItems="center" direction="row" gap={2}>
              <Typography color="text.primary">Quick Bread</Typography>
              <NavigateNextIcon fontSize="small" sx={{color: 'red', marginLeft: '-10px'}} />
            </Stack>
          </Breadcrumbs>

          <Typography color="text.primary" variant="h2" sx={{fontWeight: '400', fontSize: '4.75rem', marginTop: '1rem', marginBottom: '3rem'}}>Whole-Gain Banana Bread</Typography>
          <Typography paragraph={true} sx={{fontSize: '1.5rem', color: '#a6a6a6'}}>
            This one-bowl banana bread — our <Link sx={{ color: '#a6a6a6', textDecorationColor: '#a6a6a6'}} href="#">2018 Recipe of the Year</Link> — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Box
            component="img"
            sx={{
              width: '100%'
            }}
            alt="The house from the offer."
            src="/image.png"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
              <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}} xs={4} item>
                <ScheduleIcon sx={{color: 'rgba(0, 0, 0, 0.87)', marginRight: '10px'}} fontSize="large"/>
                <Box>
                  <Typography color="text.primary">PREP</Typography>
                  <Typography color="text.primary" sx={{fontSize: '1.5rem'}}>10 mins</Typography>
                </Box>
              </Grid>
              <Grid sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}} xs={4} item>
                <Typography color="text.primary">BAKE</Typography>
                <Typography color="text.primary" sx={{fontSize: '1.5rem'}}>1 hr to 1 hr 15 mins</Typography>
              </Grid>
              <Grid sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}} xs={4} item>
                <Typography color="text.primary">ToTal</Typography>
                <Typography color="text.primary" sx={{fontSize: '1.5rem'}}>1 hr 10 mins</Typography>
              </Grid>
            </Box>
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '3rem'}}>
              <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}} xs={6}>
                <AcUnitIcon sx={{color: 'rgba(0, 0, 0, 0.87)', marginRight: '10px'}} fontSize="large"/>
                <Box>
                  <Typography color="text.primary">YEILD</Typography>
                  <Typography color="text.primary" sx={{fontSize: '1.5rem'}}>1 loaf, 12 generous servings</Typography>
                </Box>
              </Grid>
              <Grid sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}} xs={6}>
                <Button sx={{borderRadius: 0, marginRight: '10px', color: 'rgba(0, 0, 0, 0.87)', borderColor: 'red'}} variant="outlined" startIcon={<SaveAltOutlinedIcon sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>}>
                  SAVE RECEIPT
                </Button>
                <Button sx={{borderRadius: 0, color: 'rgba(0, 0, 0, 0.87)', borderColor: 'red'}} variant="outlined" startIcon={<LocalPrintshopOutlinedIcon sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>}>
                  PRINT
                </Button>
              </Grid>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
