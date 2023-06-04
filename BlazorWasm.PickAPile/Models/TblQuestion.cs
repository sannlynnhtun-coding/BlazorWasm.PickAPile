using System;
using System.Collections.Generic;

namespace BlazorWasm.PickAPile.Models;

public class TblQuestion
{
    public string QuestionId { get; set; } = null!;

    public string QuestionName { get; set; } = null!;

    public string QuestionDesp { get; set; } = null!;

    public string? PhotoId { get; set; }

    public bool DelFlag { get; set; }

    public DateTime CreatedDateTime { get; set; }

    public string CreatedUserId { get; set; } = null!;

    public DateTime? ModifiedDateTime { get; set; }

    public string? ModifiedUserId { get; set; }
}
