import React from 'react';
import styled from 'styled-components';
import Nexus from '@twinlify/nexus';

Nexus.create({
  clientId: 'demo',
  containerId: 'nexusContainer',
  configId: 'rooms'
});

const $Nexus = styled.div`
    width: 600px;
    height: 450px;
`
const Solutions = () => {
    return (
        <main>
        <p>Solutions</p>
        <$Nexus id="nexusContainer"/>
        </main>
    )
}

export default Solutions;
