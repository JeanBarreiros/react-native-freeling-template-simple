import styled from 'styled-components/native';

export const CustomEditText = styled.TextInput`
  color: ${props => props.color?props.color:'#252525'};
  fontSize: ${props => props.fontSize?props.fontSize:'28'};
  textAlign: ${props => props.textAlign?props.textAlign:'left'};
  margin: ${props => props.margin?props.margin:'0px'};
  marginTop: ${props => props.marginTop?props.marginTop:'5px'};
  marginLeft: ${props => props.marginLeft?props.marginLeft:'5px'};
  marginRight: ${props => props.marginRight?props.marginRight:'5px'};
  marginBottom: ${props => props.marginBottom?props.marginBottom:'5px'};
  padding: ${props => props.padding?props.padding<5?'5px':props.padding+'px':'5px'};
  paddingHorizontal: 20;
  borderRadius: ${props => props.borderRadius?props.borderRadius:'10px'};
  backgroundColor: 'rgba(0,0,0,0)';
`;
