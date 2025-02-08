import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'

function HomeLayout() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Digital Brain
                    </Typography>
                    <NavBar />
                </Toolbar>
            </AppBar>
            <Container>
                <Box my={4}>
                    <Outlet />
                </Box>
            </Container>
            <footer>
                <Box mt={4} py={2} textAlign="center">
                    <Typography variant="body2" color="textSecondary">
                        © 2025 Digital Brain. All rights reserved.
                    </Typography>
                </Box>
            </footer>
        </div>
    )
}

export default HomeLayout
