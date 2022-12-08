# Read

---

**介绍**

    写到内存  在Memory cell方块中写入值
        val:
            接受:变量,byte,short,int,long,long long,boolean,float,double,String
            不接受:char
        index:
            接受:int
            Memory cell:0~31
            Memory bank:0~511

**实例**

游戏内部
```
    write val to cell at index
```
Mindustry
```
    write val cell index
```
java
```java
    public class start{
    public static void main(String[] args){
        int index = 1;
        cell cell=new cell();//写入在这里
        cell.writeCell(val, index);
    }
}

class cell{//模拟Memory cell
    //32个地址
    private final int[] num = new int[32];

    public cell(){
    }

    public int readCell(int index){//读
        try {
            return this.num[index];
        }catch(Exception IndexOutOfRangeException){
            System.out.print("越界");
            return 0;
        }
    }

    public void writeCell(int val, int index){//写
        try {
            this.num[index] = val;
        }catch(Exception IndexOutOfRangeException){
            System.out.print("越界");
        }
    }
}
```
p.s.赋值String时要加""否则为null

[返回](https://lanluz.github.io/)