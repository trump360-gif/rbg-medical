const DOCTOR_PORTRAITS = [
  'photo-1612349317150-e413f6a5b16d',
  'photo-1559839734-2b71ea197ec2',
  'photo-1622253692010-333f2da6031d',
  'photo-1537368910025-700350fe46c7',
  'photo-1594824476967-48c8b964273f',
  'photo-1582750433449-648ed127bb54',
  'photo-1618498082410-b4aa22193b38',
  'photo-1607990281513-2c110a25bd8c',
  'photo-1614608682850-e0d6ed316d47',
  'photo-1607746882042-944635dfe10e',
  'photo-1566492031773-4f4e44671857',
  'photo-1580489944761-15a19d654956',
  'photo-1472099645785-5658abf4ff4e',
  'photo-1438761681033-6461ffad8d80',
  'photo-1500648767791-00dcc994a43e',
  'photo-1544005313-94ddf0286df2',
  'photo-1506794778202-cad84cf45f1d',
  'photo-1534528741775-53994a69daeb',
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1531746020798-e6953c6e8e04',
  'photo-1502823403499-6ccfcf4fb453',
  'photo-1494790108377-be9c29b29330',
  'photo-1560250097-0b93528c311a',
  'photo-1573497019940-1c28c88b4f3e',
  'photo-1545167622-3a6ac756afa4',
  'photo-1548142813-c348350df52b',
  'photo-1573496359142-b8d87734a5a2',
  'photo-1557862921-37829c790f19',
  'photo-1552058544-f2b08422138a',
  'photo-1567532939604-b6b5b0db2604',
  'photo-1542909168-180c6fdbb8e2',
  'photo-1519345182560-3f2917c472ef',
  'photo-1573497019236-17f8177b81e8',
  'photo-1508214751196-bcfd4ca60f91',
  'photo-1542206395-9feb3edaa68d',
  'photo-1503023345310-bd7c1de61c7d',
  'photo-1519085360753-af0119f7cbe7',
  'photo-1540569014015-19a7be504e3a',
  'photo-1499952127939-9bbf5af6c51c',
  'photo-1463453091185-61582044d556',
];

export function getDoctorPhotoUrl(doctorId: string): string {
  let hash = 0;
  for (let i = 0; i < doctorId.length; i++) {
    hash = ((hash << 5) - hash + doctorId.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(hash) % DOCTOR_PORTRAITS.length;
  return `https://images.unsplash.com/${DOCTOR_PORTRAITS[idx]}?q=80&w=400&h=400&auto=format&fit=crop&crop=face`;
}
