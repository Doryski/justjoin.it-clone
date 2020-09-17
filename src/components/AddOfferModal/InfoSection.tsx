import React, { useContext } from 'react'
import _ from 'lodash'
import InputComponent from './CustomInput'
import SelectComponent from './CustomSelect'
import { Wrapper, InputsContainer } from './StyledComponents'
import {
    EXP_LVL_OPTIONS,
    EMP_TYPE_OPTIONS,
    LOCATIONS,
    TECHNOLOGIES,
} from '../../helpers/utils'
import { AddOfferContext } from './AddOfferContext'

const InfoSection = () => {
    const { register, errors } = useContext(AddOfferContext)
    const SALARY_STEP = 100

    return (
        <InputsContainer>
            <SelectComponent
                name='tech'
                label='Technology'
                register={register}
                required
                errors={errors}
                options={{ array: TECHNOLOGIES }}
            />

            <InputComponent
                type='text'
                name='offerTitle'
                label='Offer title'
                register={register}
                required
                errors={errors}
            />
            <InputComponent
                type='text'
                name='companyName'
                label='Company name'
                register={register}
                required
                errors={errors}
            />

            <SelectComponent
                name='city'
                label='City'
                register={register}
                required
                errors={errors}
                options={{ array: LOCATIONS }}
            />
            <InputComponent
                type='text'
                name='street'
                label='Street'
                register={register}
                required
                errors={errors}
            />
            <InputComponent
                type='number'
                name='companySize'
                label='Company Size'
                register={register}
                required
                errors={errors}
            />

            <Wrapper>
                <InputComponent
                    type='number'
                    name='salaryFrom'
                    label='Salary From'
                    register={register}
                    required
                    errors={errors}
                    step={SALARY_STEP}
                />
                <InputComponent
                    type='number'
                    name='salaryTo'
                    label='Salary To'
                    register={register}
                    required
                    errors={errors}
                    step={SALARY_STEP}
                />
            </Wrapper>

            <Wrapper>
                <SelectComponent
                    name='empType'
                    label='EMP type'
                    register={register}
                    required
                    errors={errors}
                    options={{ array: EMP_TYPE_OPTIONS }}
                />

                <SelectComponent
                    name='expLvl'
                    label='EXP level'
                    register={register}
                    required
                    errors={errors}
                    options={{
                        array: EXP_LVL_OPTIONS.map(lvl =>
                            _.capitalize(lvl)
                        ),
                    }}
                />
            </Wrapper>
        </InputsContainer>
    )
}

export default InfoSection
