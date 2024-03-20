'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Box, styled } from '@mui/material'


const ListBox = styled('ul')(({ theme }) => ({
    margin: '1.5rem 0rem 0rem 0rem',
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    '@media(max-width : 900px)': {
        overflowX: 'scroll',
        width: '100%'
    }

}));

const ListItem = styled('li')(({ theme }) => ({
    'a': {
        padding: '12px 16px',
        display: 'inline-block',
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        borderRadius: '6px',
        width: 'max-content'
    }
}));

const Navbar = () => {
    const pathname = usePathname()

    return (
        <Box>
            <ListBox>
                <ListItem>
                    <Link
                        style={{
                            background: pathname === '/' ? 'linear-gradient(0deg, #932AC3, #7B35D8)' : '',
                            color: pathname === '/' ? '#fff' : '',
                        }}
                        href="/">
                        Overview
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        style={{
                            background: pathname === '/validators' ? 'linear-gradient(0deg, #932AC3, #7B35D8)' : '',
                            color: pathname === '/validators' ? '#fff' : '',
                        }}
                        href="/validators"
                    >
                        Validators
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        style={{
                            background: pathname === '/delegator' ? 'linear-gradient(0deg, #932AC3, #7B35D8)' : '',
                            color: pathname === '/delegator' ? '#fff' : '',
                        }}
                        href="/delegator"
                    >
                        Delegators
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        style={{ 
                            background: pathname === '/account' ? 'linear-gradient(0deg, #932AC3, #7B35D8)' : '',
                            color: pathname === '/account' ? '#fff' : '',
                         }} 
                         href="/account"
                    >
                        My Account
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        style={{ 
                            background: pathname === '/calculator' ? 'linear-gradient(0deg, #932AC3, #7B35D8)' : '',
                            color: pathname === '/calculator' ? '#fff' : '',
                         }} 
                         href="/calculator"
                    >
                        Earning Calculator
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        style={{ 
                            background: pathname === '/history' ? 'linear-gradient(0deg, #932AC3, #7B35D8)' : '',
                            color: pathname === '/history' ? '#fff' : '',
                         }} 
                         href="/history"
                    >
                        History
                    </Link>
                </ListItem>
            </ListBox>
        </Box>
    )
}
export default Navbar