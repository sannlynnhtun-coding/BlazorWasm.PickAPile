namespace BlazorWasm.PickAPile.Models
{
    public class TblQuestionPaginationDataModel
    {
        public List<TblQuestion> lstQuestion { get; set; } = new List<TblQuestion>();
        public int totalPageNo { get; set; }
    }
}
