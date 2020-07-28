import React from 'react'
import { useStateValue } from "../state"


export const createSequence = (numb) => Array.from(new Array(numb), (val, index) => index + 1)