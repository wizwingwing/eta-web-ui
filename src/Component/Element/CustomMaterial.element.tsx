import styled from "styled-components"
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';



export const TextFieldBase = styled(TextField)`
    & label{
      color: #14FFEC;
    }
    &:hover label,& label.Mui-focused{
      color: #C2FFD9;
    }
    & .MuiOutlinedInput-root{
        color: #C2FFD9;
        & fieldset{
          border-color: #14FFEC;
        }
        &:hover fieldset{
          border-color: #C2FFD9;
        }
        &.Mui-focused fieldset{
          border-color: #C2FFD9;
        }
    }

`

export const FormLabel = styled(FormControlLabel)`
    &.MuiFormControlLabel-root{
      color: #14FFEC;
    }
    
`
export const CheckboxRemember = styled(Checkbox)`
    &.MuiCheckbox-root, &.Mui-checked{
      color: #14FFEC  !important;
    }
`

