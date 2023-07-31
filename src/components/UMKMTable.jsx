import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export default function UMKMTable() {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>
          Sumber: Data UMKM Kalurahan Sardonoharjo Mei 2023
        </TableCaption>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Nama UMKM/Pemilik</Th>
            <Th isNumeric>Tahun Berdiri</Th>
            <Th>RT</Th>
            <Th>RW</Th>
            <Th>Produk/Komoditas</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Mulanto</Td>
            <Td isNumeric>2009</Td>
            <Td>01</Td>
            <Td>20</Td>
            <Td>Sembako & Mebel</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Nia Laundry</Td>
            <Td isNumeric>2014</Td>
            <Td>01</Td>
            <Td>20</Td>
            <Td>Jasa Laundry</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Jamini</Td>
            <Td isNumeric>2011</Td>
            <Td>01</Td>
            <Td>20</Td>
            <Td>Jajanan Anak</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Painah</Td>
            <Td isNumeric>2012</Td>
            <Td>01</Td>
            <Td>20</Td>
            <Td>Sembako</Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>Jati</Td>
            <Td isNumeric>2014</Td>
            <Td>01</Td>
            <Td>20</Td>
            <Td>Jasa Kos-Kosan</Td>
          </Tr>
          <Tr>
            <Td>6</Td>
            <Td>Cilok Mang Caca</Td>
            <Td isNumeric>2019</Td>
            <Td>01</Td>
            <Td>20</Td>
            <Td>Jajanan Anak</Td>
          </Tr>
          <Tr>
            <Td>7</Td>
            <Td>Krisdiana</Td>
            <Td isNumeric>2018</Td>
            <Td>01</Td>
            <Td>20</Td>
            <Td>Makanan & Katering</Td>
          </Tr>
          <Tr>
            <Td>8</Td>
            <Td>Suyudi Haryono</Td>
            <Td isNumeric>2014</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Sembako</Td>
          </Tr>
          <Tr>
            <Td>9</Td>
            <Td>Suryatini</Td>
            <Td isNumeric>2013</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Jajanan Anak</Td>
          </Tr>
          <Tr>
            <Td>10</Td>
            <Td>Azis Kurniawan</Td>
            <Td isNumeric>2013</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Jasa Bengkel Motor</Td>
          </Tr>
          <Tr>
            <Td>11</Td>
            <Td>Andra Brown</Td>
            <Td isNumeric>2009</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Roti</Td>
          </Tr>
          <Tr>
            <Td>12</Td>
            <Td>Sumiasih</Td>
            <Td isNumeric>2012</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Jajanan Anak</Td>
          </Tr>
          <Tr>
            <Td>13</Td>
            <Td>Jendro</Td>
            <Td isNumeric>2014</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Sembako</Td>
          </Tr>
          <Tr>
            <Td>14</Td>
            <Td>Nurjanah</Td>
            <Td isNumeric>2015</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Pakaian Anak & Bengkel Motor</Td>
          </Tr>
          <Tr>
            <Td>15</Td>
            <Td>Rita</Td>
            <Td isNumeric>2015</Td>
            <Td>02</Td>
            <Td>20</Td>
            <Td>Penjahit</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>No</Th>
            <Th>Nama UMKM/Pemilik</Th>
            <Th isNumeric>Tahun Berdiri</Th>
            <Th>RT</Th>
            <Th>RW</Th>
            <Th>Produk/Komoditas</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
