class Main {

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.sumNum(new int[]{1,-2,3,10,-4,7,2,-5}));

    }
}

class Solution {
    // A 1
    // B 2
    // Z 26 26
    // AA 27 1*26 + 1
    // AB 28 1*26 + 2
    // AZ 26+25 1*26 + 26
    // AAA 1*26*26 + 1*26 + 1

    public  int sumNum(int[] array) {
        int n = array.length;
        int all = array[n - 1], start = array[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            if ((start + array[i]) > array[i]) {
                start = start + array[i];
            } else {
                start = array[i];
            }
            if (all < start) {
                all = start;
            }
        }
        return all;
    }
}

// public class ExcelColumn {
//     public static void main(String[] args) {
//         String colstr = "B";
//         int colIndex = excelColStrToNum(colstr);
//         System.out.println(colstr + "列转换成数字下标：" + colIndex);
//         colIndex = 26;
//         colstr = excelColIndexToStr(colIndex);
//         System.out.println("下标为" + colIndex + "转换成列：" + colstr);
//         colstr = "AAAA";
//         colIndex = excelColStrToNum(colstr);
//         System.out.println(colstr + "列转换成数字下标：" + colIndex);
//         colIndex = 466948;
//         colstr = excelColIndexToStr(colIndex);
//         System.out.println("下标为" + colIndex + "转换成列：" + colstr);
//     }

//     /**
//      * * 该方法用来将Excel中的ABCD列转换成具体的数据 * @param column:ABCD列名称 * @return
//      * integer：将字母列名称转换成数字 *
//      **/
//     public static int excelColStrToNum(String column) {
//         int num = 0;
//         int result = 0;
//         int length = column.length();
//         for (int i = 0; i < length; i++) {
//             char ch = column.charAt(length - i - 1);
//             num = (int) (ch - 'A' + 1);
//             num *= Math.pow(26, i);
//             result += num;
//         }
//         return result;
//     }

//     /**
//      * * 该方法用来将具体的数据转换成Excel中的ABCD列 * @param int：需要转换成字母的数字 * @return column:ABCD列名称
//      * *
//      **/
//     public static String excelColIndexToStr(int columnIndex) {
//         if (columnIndex <= 0) {
//             return null;
//         }
//         String columnStr = "";
//         columnIndex--;
//         do {
//             if (columnStr.length() > 0) {
//                 columnIndex--;
//             }
//             columnStr = ((char) (columnIndex % 26 + (int) 'A')) + columnStr;
//             columnIndex = (int) ((columnIndex - columnIndex % 26) / 26);
//         } while (columnIndex > 0);
//         return columnStr;
//     }
// }