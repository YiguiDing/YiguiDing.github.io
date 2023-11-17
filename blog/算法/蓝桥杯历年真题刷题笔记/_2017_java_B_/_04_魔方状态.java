public class _04_魔方状态 {
	public static void main(String[] args) {

	}

	static int[][] state = { { 0, 1, 2, 3 }, { 4, 5, 6, 7 } };
	static 
	static int counter;

	static dfs(int stepY,int stepX){
		if(step==state.length){
		}else{
			for (int i = step; i < state.length; i++) {
				exchange(state, step, i);
				dfs(step+1);
				exchange(state, step, i);
			}
		}
	}
}

