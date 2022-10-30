import {
    Heading,
    Box,
    Image,
    Text,
    Center,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import medimg from './Medicines/med1.jpg';
const medicines = [
    {
        "MedName": "Dolo 650",
        "MedDetails": "For fever",
        "MedExpiry": "04/01/2023",
        "MedPic": "med1",
        "Donor": "Shiva"
    }, {
        "MedName": "dala 650",
        "MedDetails": "For fever",
        "MedExpiry": "04/01/2023",
        "MedPic": "med2",
        "Donor": "Shiva"
    }, {
        "MedName": "popo 650",
        "MedDetails": "For fever",
        "MedExpiry": "04/01/2023",
        "MedPic": "med1",
        "Donor": "Shiva"
    }, {
        "MedName": "ropo 650",
        "MedDetails": "For fever",
        "MedExpiry": "04/01/2023",
        "MedPic": "med2",
        "Donor": "Shiva"
    }
];

export default function Medicinecard() {

    return (

        // medicines.map((med) => (<div>
        //     <Box py={2}>
        //         <Box
        //             maxW={'270px'}
        //             w={'full'}
        //             bg={useColorModeValue('white', 'gray.800')}
        //             boxShadow={'2xl'}
        //             rounded={'md'}
        //             overflow={'hidden'}>
        //             <Image
        //                 h={'200px'}
        //                 w={'full'}
        //                 src={`../Component/Medicines/${med.MedPic}`}
        //                 objectFit={'cover'}
        //             />
        //             <Box p={6}>
        //                 <Stack spacing={0} align={'center'} mb={5}>
        //                     <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
        //                         {med.MedName}
        //                     </Heading>
        //                     <Text color={'gray.500'}>{med.MedDetails}</Text>
        //                 </Stack>

        //                 <Stack direction={'row'} justify={'center'} spacing={6}>
        //                     <Stack spacing={0} align={'center'}>
        //                         <Text fontWeight={600}>Donor</Text>
        //                         <Text fontSize={'sm'} color={'gray.500'}>
        //                             {med.MedDonor}
        //                         </Text>
        //                     </Stack>
        //                     <Stack spacing={0} align={'center'}>
        //                         <Text fontWeight={600}>Expiry</Text>
        //                         <Text fontSize={'sm'} color={'gray.500'}>
        //                             {med.MedExpiry}
        //                         </Text>
        //                     </Stack>
        //                 </Stack>
        //                 <Button
        //                     w={'full'}
        //                     mt={8}
        //                     bg={useColorModeValue('#151f21', 'gray.900')}
        //                     color={'white'}
        //                     rounded={'md'}
        //                     _hover={{
        //                         transform: 'translateY(-2px)',
        //                         boxShadow: 'lg',
        //                     }}>
        //                     Buy
        //                 </Button>
        //             </Box>
        //         </Box>
        //     </Box>
        // </div>
        // ))
        <Center py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'200px'}
                    w={'full'}
                    src={
                        `${medimg}`
                    }
                    objectFit={'cover'}
                />
                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Dolo 650
                        </Heading>
                        <Text color={'gray.500'}>For fever</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>Donor</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Shiva
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>Expiry</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                04/01/2023
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        Get
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}
