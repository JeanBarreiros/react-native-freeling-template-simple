import styled from 'styled-components/native';

export const CustomButton = styled.TouchableOpacity`
  width: ${props => props.width?props.width:'120px'};
  height: ${props => props.height?props.height:'60px'};
  borderRadius: ${props => props.radius?props.radius:'0px'};
  padding: ${props => props.padding?props.padding:'5px'};
  borderWidth: ${props => props.linear?'1px':'0px'};
  borderColor: ${props => props.linear&&props.primary?'#C82466':props.linear&&props.secondary?'#05eb42':((props.linear&&!props.primary)&&(props.linear&&!props.secondary)&&(props.linear&&props.backgroundColor))?props.backgroundColor:'#C82466'};
  backgroundColor: ${props => props.linear?'rgba(0,0,0,0)':props.primary?'#C82466':props.secondary?'#05eb42':(!props.primary&&!props.secondary&&props.backgroundColor)?props.backgroundColor:'rgba(0,0,0,0)'};
  justifyContent: center;
  align-items: center;
  marginBottom: ${props => props.marginBottom?props.marginBottom:'5px'}
`;

export const Label = styled.Text`
  fontSize: ${props => props.fontSize?props.fontSize:'28'};
  color: ${props => props.linear&&props.primary?'#C82466':props.linear&&props.secondary?'#05eb42':((props.linear&&!props.primary)&&(props.linear&&!props.secondary)&&(props.linear&&props.backgroundColor))?props.backgroundColor:(props.linear&&!props.backgroundColor)?'#C82466':props.color};
  
`;
