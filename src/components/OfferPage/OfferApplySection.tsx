import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {
    PersonOutline,
    Email,
    Create,
    Send,
    DeleteOutline,
} from '@material-ui/icons'
import Typography from '../shared/Typography'
import { TextField, Checkbox } from '@material-ui/core'
import CustomButton from '../shared/CustomButton'
import UploadCv from '../shared/UploadCv'
import InputIcon from './InputIcon'
import theme, { textColors } from '../../theme'
import { Wrapper } from './StyledComponents'
import useCheckbox from '../../helpers/useCheckbox'
import useFileUpload from '../../helpers/useFileUpload'
import { useForm } from 'react-hook-form'

const OfferApplySection = () => {
    const { isChecked, handleChange } = useCheckbox(false)
    const uploadRef = useRef<HTMLInputElement>(null!)
    const {
        fileName,
        handleFileUpload,
        handleFileChange,
        handleFileDelete,
    } = useFileUpload(uploadRef)
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = handleSubmit(data => {
        let formData: {
            [x: string]: any
        } = { ...data, processInFuture: isChecked }
        if (!!uploadRef.current.value) {
            formData = { ...formData, file: fileName }
        }

        alert(JSON.stringify(formData))
    })

    return (
        <ApplyContainer>
            <Typography
                color={textColors.title}
                fWeight={theme.fontWeight[500]}
                fontSize={theme.fontSize.xl}
                align='flex-start'
                margin='0.625em 1.25em'
            >
                Apply for this job
            </Typography>

            <Wrapper>
                <Form onSubmit={onSubmit}>
                    <FormGrid>
                        <TextField
                            style={{ fontFamily: 'inherit' }}
                            error={!!errors.firstAndLastName}
                            id='firstAndLastName'
                            name='firstAndLastName'
                            label='First & Last Name'
                            helperText={
                                errors.firstAndLastName && (
                                    <ErrorMessage>
                                        {
                                            errors.firstAndLastName
                                                ?.message
                                        }
                                    </ErrorMessage>
                                )
                            }
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputIcon Icon={PersonOutline} />
                                ),
                            }}
                            inputRef={register({
                                required:
                                    'First & last name is a required field',
                            })}
                        />
                        <TextField
                            error={!!errors.email}
                            id='email'
                            name='email'
                            label='Email'
                            helperText={
                                errors.email && (
                                    <ErrorMessage>
                                        {errors.email?.message}
                                    </ErrorMessage>
                                )
                            }
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputIcon Icon={Email} />
                                ),
                            }}
                            inputRef={register({
                                required: 'Email is a required field',
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Email is not valid',
                                },
                            })}
                        />
                        <TextField
                            id='introduction'
                            name='introduction'
                            label='Introduce yourself (linkedin/github links)'
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputIcon Icon={Create} />
                                ),
                            }}
                            inputRef={register}
                        />
                        <UploadWrapper onClick={handleFileUpload}>
                            <input
                                ref={uploadRef}
                                disabled={!!fileName}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                accept='application/pdf'
                                type='file'
                                autoComplete='off'
                                name='cv'
                                tabIndex={-1}
                            />
                            {!!fileName ? (
                                <>
                                    <div
                                        style={{ maxWidth: '210px' }}
                                    >
                                        <Typography
                                            color={textColors.pink}
                                            fWeight={
                                                theme.fontWeight[500]
                                            }
                                            fontSize={
                                                theme.fontSize.md
                                            }
                                        >
                                            {fileName}
                                        </Typography>
                                    </div>
                                    <DeleteFileBtn
                                        onClick={handleFileDelete}
                                    >
                                        <Typography
                                            color={textColors.span}
                                            fWeight={
                                                theme.fontWeight[700]
                                            }
                                        >
                                            Delete
                                        </Typography>
                                        <DeleteOutline />
                                    </DeleteFileBtn>
                                </>
                            ) : (
                                <>
                                    <UploadIconWrapper>
                                        <UploadCv />
                                    </UploadIconWrapper>
                                    <label
                                        htmlFor='cv'
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Typography
                                            color={textColors.span}
                                            fWeight={
                                                theme.fontWeight[400]
                                            }
                                            fontSize={
                                                theme.fontSize.large
                                            }
                                            margin='0 0 0 .5em'
                                        >
                                            Upload CV (.pdf)
                                        </Typography>
                                    </label>
                                </>
                            )}
                        </UploadWrapper>
                    </FormGrid>
                    <CheckboxWrapper>
                        <Checkbox
                            checked={isChecked}
                            onChange={handleChange}
                            inputProps={{
                                'aria-label': 'primary checkbox',
                            }}
                        />
                        <Typography
                            color={textColors.span}
                            fWeight={theme.fontWeight[400]}
                        >
                            Processing data in future recruitment
                        </Typography>
                    </CheckboxWrapper>
                    <ApplyButtonWrapper>
                        <CustomButton
                            pink
                            display='flex'
                            minWidth='142px'
                            padding='.5em 0 .5em 2em'
                            type='submit'
                        >
                            Apply
                            <Typography
                                display='block'
                                color={textColors.white}
                                padding='0.5em 0.5em 0.5em 1.5em'
                            >
                                <Send />
                            </Typography>
                        </CustomButton>
                    </ApplyButtonWrapper>
                </Form>
            </Wrapper>
        </ApplyContainer>
    )
}

export const ApplyContainer = styled.div`
    margin: 1.875em 0;
    padding: 0.3125em 0;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.md}) {
        margin: 0.9375em 0;
    }
`
export const Form = styled.form`
    width: 100%;
`

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    > div:nth-of-type(odd) {
        margin-right: 0.875em;
    }
    > div:nth-of-type(3),
    div:nth-of-type(4) {
        margin-top: 1em;
    }
    > div:nth-of-type(3) > div {
        min-height: 100px;
    }
`
export const ErrorMessage = styled.span`
    font-size: ${({ theme }) => theme.fontSize.sm};
`
export const UploadWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: calc(((100% - 12px) - 6px) - 8px);
    position: relative;
    width: 100%;
    padding: 20px;
    border: 1px solid;
    border-color: rgb(224, 224, 224);
    border-radius: 6px;
    transition: border-color 300ms ease 0s;
    cursor: pointer;
    min-height: 100px;
`
export const UploadIconWrapper = styled.div`
    > svg {
        width: 50px;
        height: 50px;
    }
`
export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    margin-left: -0.75em;
`
export const ApplyButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const DeleteFileBtn = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 6px;
    background: none;
    right: 0;
    bottom: 0;
    padding: 6px 8px;
    color: ${({ theme }) => theme.colors.span};
    &:hover {
        background: ${({ theme }) =>
            theme.colors.buttonBackgroundHover};
    }
`

export default OfferApplySection
