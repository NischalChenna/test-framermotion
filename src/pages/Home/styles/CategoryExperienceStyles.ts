import { Typography, styled } from '@mui/material';

export const StylesExperienceCard = {
	boxShadow: '1px 3px 6px rgba(0,0,0,.16)',
	cursor: 'pointer',
	borderRadius: '24px',
};

export const StylesDiscountText = {
	position: 'absolute',
	top: '14px',
	left: '14px',
	background: '#ff305a',
	padding: '7px',
	borderRadius: '3px',
	color: '#fff',
};

export const StylesPackageText = {
	position: 'absolute',
	bottom: '14px',
	left: '14px',
	backgroundColor: 'secondary.main',
	padding: '7px',
	borderRadius: '3px',
	color: 'primary.main',
};

export const StylesCardTitle = {
	fontWeight: 'bold',
    textAlign: 'left'
};

export const StylesPriceContainer = {
	display: 'flex',
	gap: 1,
	pb: 2,
};

export const StylesTitleContainer = {
	display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pb: 1
};

export const StylesDiscountPrice = {
	// color: 'grey',
	fontWeight: 'bold',
};

export const StylesActualPrice = {
	color: 'GrayText',
	fontWeight: 'bold',
	textDecoration: 'line-through',
};

export const StylesLocationContainer = {
	display: 'flex',
    gap: 1,
	// color: 'GrayText',
	alignItems: 'center',
	fontWeight: 'bold',
};

export const StylesRatingContainer = {
	display: 'flex',
    gap: 1,
    alignItems: 'center',
};

export const textStyle = {
	maxWidth: '320px',
	'& .MuiInputBase-root': {
		background: 'white',
		border: '2px solid grey',
		height: 50,
	},
	'& .MuiFilledInput-root.Mui-focused': {
		background: 'white',
		height: 50,
	},
	'& .MuiFilledInput-root:hover': {
		background: 'white',
		height: 50,
	},
	marginBottom: '7px',
	'& .MuiFormLabel-root': {
		color: 'primary.contrastText',
		fontSize: '12px',
	},
	'& .MuiFormLabel-root.Mui-focused': {
		color: 'primary.contrastText',
	},
	'& .MuiFilledInput-input': {
		backgroundClip: 'text !important',
		paddingTop: '7px !important',
	},
};

export const StylesFilterContainer = {
	backgroundColor: '#f6f6f6',
	padding: '20px 16px',
	display: 'flex',
	flexDirection: 'column',
	gap: 1,
};

export const StylesClearFilterText = {
	textAlign: 'right',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'right',
	color: 'GrayText',
	cursor: 'pointer',
};

export const StyledH6Content = styled(Typography)(() => ({
	fontWeight: 'bold',
	fontSize: '1.25rem',
}));
