/********************************************************************************
 * Copyright (c) 2021, 2023 BMW Group AG
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Box } from '@mui/material'
import { StepperItem } from './StepperItem'

export interface StepList {
  step: number,
  headline: string,
  description: string,
  text?: string,
  color?: string
}

export interface StepperProps {
  list: StepList[]
  showSteps: number
  activeStep: number
}

export const Stepper = ({ list, showSteps, activeStep }: StepperProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '0px auto',
      }}
    >
      {list &&
        list
          .filter((item) => item.step <= showSteps && item.step <= list.length)
          .map((item, i) => (
            <StepperItem
              key={i}
              step={item.step}
              headline={item.headline}
              text={item.text ?? ''}
              color={item.color ?? ''}
              activeStep={activeStep}
              index={i + 1}
              totalSteps={list.length}
            />
          ))}
    </Box>
  )
}
