using System;
using System.Collections.Generic;

namespace BlazorWasm.PickAPile.Models;

public class TblAnswer
{
    public string AnswerId { get; set; } = null!;

    public string? PhotoId { get; set; }

    public string AnswerName { get; set; } = null!;

    public string AnswerDesp { get; set; } = null!;

    public string QuestionId { get; set; } = null!;

    public bool DelFlag { get; set; }

    public DateTime CreatedDateTime { get; set; }

    public string CreatedUserId { get; set; } = null!;

    public DateTime? ModifiedDateTime { get; set; }

    public string? ModifiedUserId { get; set; }
}
