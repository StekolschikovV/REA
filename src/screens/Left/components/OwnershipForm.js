import React from 'react'

const OwnershipForm = ({ownershipForm, _handlerOnClick}) => (
    <ul className={'ownershipForm'}>
        <li className={ownershipForm === 'residential' ? 'active' : ''} onClick={() => {
            _handlerOnClick('residential')
        }}>Residential Property
        </li>
        <li className={ownershipForm === 'commercial' ? 'active' : ''} onClick={() => {
            _handlerOnClick('commercial')
        }}>Commercial property
        </li>
    </ul>
)

export default OwnershipForm