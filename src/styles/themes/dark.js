import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flexDirection: column;
  justifyContent: center;
  align-items: center;
  background-color: #252525;
`;

export const Text = styled.Text`
  color: ${props => props.color?props.color:'#f1f1f1'};
  fontSize: ${props => props.fontSize?props.fontSize:'28'};
  textAlign: ${props => props.textAlign?props.textAlign:'left'};
  margin: ${props => props.margin?props.margin:'0px'};
  marginTop: ${props => props.marginTop?props.marginTop:'5px'};
  marginLeft: ${props => props.marginLeft?props.marginLeft:'0px'};
  marginRight: ${props => props.marginRight?props.marginRight:'0px'};
  marginBottom: ${props => props.marginBottom?props.marginBottom:'5px'};
`;
